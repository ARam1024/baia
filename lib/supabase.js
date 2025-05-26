import "react-native-url-polyfill/auto";
import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const supabaseUrl = "EXPO_PUBLIC_SUPABASE_UR";
const supabaseAnonKey = "EXPO_PUBLIC_SUPABASE_ANON_KEY";
export const supabase = createClient(supabaseUrl, supabaseAnonKey,{
  auths:{
    Storage:AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false
  }
});
