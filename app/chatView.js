import React, { useState, useRef, useEffect } from 'react';
import {
  View, Text, TextInput, Pressable, FlatList, SafeAreaView,
  StyleSheet, Keyboard, ActivityIndicator, Alert
} from 'react-native';
import { colors } from "../styles/colors"
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@chat_messages';

const ChatView = () => {
  const [apiEndpoint] = useState('https://book-api-with-openia.onrender.com/api/v1/chat');
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([]);
  const flatListRef = useRef();

  // Cargar mensajes guardados al iniciar
  useEffect(() => {
    const loadMessages = async () => {
      try {
        const savedMessages = await AsyncStorage.getItem(STORAGE_KEY);
        if (savedMessages) {
          setMessages(JSON.parse(savedMessages));
        }
      } catch (error) {
        console.error('Error al cargar mensajes:', error);
      }
    };

    loadMessages();
  }, []);

  // Guardar mensajes cuando cambian
  useEffect(() => {
    const saveMessages = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
      } catch (error) {
        console.error('Error al guardar mensajes:', error);
      }
    };

    if (messages.length > 0) {
      saveMessages();
    }
  }, [messages]);

  const createMessage = (role, content, status, latency) => ({
    id: Date.now().toString(),
    role,
    content,
    timestamp: new Date().toISOString(),
    ...(role !== 'user' && { status, latency })
  });

  const handleSend = async () => {
    if (!userInput.trim()) return;

    setIsLoading(true);
    Keyboard.dismiss();

    const userMessage = createMessage('user', userInput);
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setUserInput('');

    try {
      const startTime = Date.now();
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: userInput })
      });

      const responseText = await response.text();
      const botMessage = createMessage(
        'assistant', 
        responseText, 
        response.status, 
        `${Date.now() - startTime}ms`
      );
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error:', error);
      const errorMessage = createMessage('error', `Error: ${error.message}`, 'Failed', 'N/A');
      setMessages(prev => [...prev, errorMessage]);
      Alert.alert('Error de conexión', `No se pudo completar la petición: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = async () => {
    Alert.alert(
      'Limpiar chat',
      '¿Estás seguro de que quieres borrar toda la conversación?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        { 
          text: 'Borrar', 
          onPress: async () => {
            setMessages([]);
            try {
              await AsyncStorage.removeItem(STORAGE_KEY);
            } catch (error) {
              console.error('Error al borrar mensajes:', error);
            }
          }
        }
      ]
    );
  };

  const renderMessage = ({ item }) => {
    const isUser = item.role === 'user';
    const isError = item.role === 'error';
    const time = new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    return (
      <View style={[
        styles.messageBubble,
        isUser ? styles.userBubble : isError ? styles.errorBubble : styles.botBubble
      ]}>
        <Text style={[styles.messageText, isUser && styles.userMessageText]}>
          {item.content}
        </Text>
        <View style={styles.messageMeta}>
          <Text style={[styles.metaText, isUser && styles.userMetaText]}>
            {time}{!isUser && ` • ${item.latency} • Status: ${item.status}`}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatContainer}
        onContentSizeChange={() => flatListRef.current?.scrollToEnd({ animated: true })}
      />

      <View style={styles.inputContainer}>
        <Pressable
          style={({ pressed }) => [
            styles.clearButton,
            pressed && styles.pressedButton
          ]}
          onPress={clearChat}
        >
          <Text style={styles.clearButtonText}>Limpiar</Text>
        </Pressable>

        <TextInput
          style={styles.textInput}
          value={userInput}
          onChangeText={setUserInput}
          placeholder="Escribe tu pregunta..."
          multiline
          onSubmitEditing={handleSend}
          editable={!isLoading}
        />
        
        <Pressable
          style={({ pressed }) => [
            styles.sendButton,
            (isLoading || !userInput.trim()) && styles.disabledButton,
            pressed && styles.pressedButton
          ]}
          onPress={handleSend}
          disabled={isLoading || !userInput.trim()}
        >
          {isLoading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.sendButtonText}>Enviar</Text>
          )}
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white_25
  },
  chatContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: colors.orange,
    borderTopRightRadius: 0,
  },
  botBubble: {
    alignSelf: 'flex-start',
    backgroundColor: colors.rose,
    borderTopLeftRadius: 0,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  errorBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#fee2e2',
    borderTopLeftRadius: 0,
    borderWidth: 1,
    borderColor: '#fca5a5',
  },
  messageText: {
    fontSize: 16,
    color: "#ffffff",
  },
  userMessageText: {
    color: '#fff',
  },
  messageMeta: {
    flexDirection: 'row',
    marginTop: 4,
  },
  metaText: {
    fontSize: 10,
    color: '#6b7280',
  },
  userMetaText: {
    color: '#e5e7eb',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  textInput: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.white_75,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginHorizontal: 10,
    maxHeight: 120,
    backgroundColor: '#f9fafb',
  },
  sendButton: {
    backgroundColor: colors.yellow,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  clearButton: {
    backgroundColor: colors.red,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  clearButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 12,
  },
  disabledButton: {
    backgroundColor: colors.orange,
    opacity: 0.7,
  },
  pressedButton: {
    transform: [{ scale: 0.98 }],
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default ChatView;