import { createClient } from '@supabase/supabase-js';
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. ' +
    'Please make sure REACT_APP_SUPABASE_URL and REACT_APP_SUPABASE_ANON_KEY are set in your .env file'
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, 
    autoRefreshToken: true, 
    detectSessionInUrl: true, 
    storage: window.localStorage, 
    storageKey: 'kpi-dashboard-auth', 
  },
  realtime: {
    params: {
      eventsPerSecond: 10 
    }
  },
  global: {
    headers: {
      'x-application-name': 'kpi-dashboard'
    }
  }
});

export const getSession = async () => {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) {
    console.error('Error getting session:', error);
    return null;
  }
  return session;
};

export const refreshSession = async () => {
  const { data: { session }, error } = await supabase.auth.refreshSession();
  if (error) {
    console.error('Error refreshing session:', error);
    return null;
  }
  return session;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error('Error signing out:', error);
    throw error;
  }
};

export default supabase;