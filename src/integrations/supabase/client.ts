import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://tpmwammwxvzlqvbitprm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwbXdhbW13eHZ6bHF2Yml0cHJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI5NzY2MDQsImV4cCI6MjA4ODU1MjYwNH0.VCzgwFnaJq6bAC4D-1npFGjzWL6nME60vEK064iKi7o';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
