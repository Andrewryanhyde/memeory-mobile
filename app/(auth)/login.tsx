import React, { useState } from "react";
import { Alert, View, Text, Image } from "react-native";
import { supabase } from "../../lib/supabaseClient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useColorScheme } from "@/hooks/useColorScheme";

const image = require("../../assets/images/react-logo.png");

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const theme = useColorScheme();

  console.log({ image });

  async function signInWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) Alert.alert("Sign In Error", error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert("Sign Up Error", error.message);
    setLoading(false);
  }

  console.log({ theme });

  return (
    <View
      className={`h-full p-4 pt-20 bg-light-background dark:bg-dark-background flex justify-between pb-20`}
    >
      <View className="flex justify-center items-center flex-1">
        <Image source={image} />
      </View>
      <View className="py-1 self-stretch mt-5">
        <TouchableOpacity
          disabled={loading}
          onPress={() => signInWithEmail()}
          className={`rounded-lg py-2 px-3 m-2 bg-light-background dark:bg-dark-background border-2 border-light-border dark:border-dark-border `}
        >
          <Text
            className={`text-lg font-bold self-center text-light-text dark:text-dark-text`}
          >
            Log In
          </Text>
        </TouchableOpacity>
      </View>
      <View className="py-1 self-stretch">
        <TouchableOpacity
          disabled={loading}
          onPress={() => signUpWithEmail()}
          className={`rounded-lg py-2 px-3 m-2 bg-light-background dark:bg-dark-background border-2 border-light-border dark:border-dark-border `}
        >
          <Text
            className={`text-lg font-bold self-center text-light-text dark:text-dark-text`}
          >
            Create Account
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
