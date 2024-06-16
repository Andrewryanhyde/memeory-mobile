import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { Session } from "@supabase/supabase-js";
import { supabase } from "../lib/supabaseClient";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Add this import

export default function RootLayout() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack>
        {session ? (
          <Stack.Screen name="(tabs)" options={{ title: "Home" }} />
        ) : (
          <Stack.Screen name="(auth)" options={{ title: "Sign In" }} />
        )}
      </Stack>
    </GestureHandlerRootView>
  );
}
