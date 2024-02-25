import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ygxxgqpcxqeqzmwpnhad.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlneHhncXBjeHFlcXptd3BuaGFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg4NzQ3OTUsImV4cCI6MjAyNDQ1MDc5NX0.O_4TJLo6c2PivGYEtTlxsBctvJ9a1ZvOi42zq7wXWhU"
);
