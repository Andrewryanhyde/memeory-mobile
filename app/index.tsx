import { router } from "expo-router";
import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

export default function IndexPage() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        console.log({ session });
        router.replace("/(tabs)/");
      } else {
        console.log("no user");
      }
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        router.replace("/(tabs)");
      } else {
        console.log("no user");
        router.replace("/(auth)/login");
      }
    });
  }, []);
}
