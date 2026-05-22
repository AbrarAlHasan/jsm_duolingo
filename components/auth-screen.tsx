import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SymbolView } from "expo-symbols";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

import { AuthField } from "@/components/auth-field";
import { SafeAreaView } from "@/components/safe-area-view";
import { SocialAuthButton } from "@/components/social-auth-button";
import { VerificationModal } from "@/components/verification-modal";
import { images } from "@/constants/images";

type AuthScreenProps = {
  mode: "sign-up" | "sign-in";
};

const COPY = {
  "sign-up": {
    title: "Create your account",
    subtitle: "Start your language journey today ✨",
    primaryLabel: "Sign Up",
    footerPrompt: "Already have an account?",
    footerLink: "Log in",
    footerHref: "/sign-in" as const,
  },
  "sign-in": {
    title: "Welcome back",
    subtitle: "Sign in to continue your language journey ✨",
    primaryLabel: "Sign In",
    footerPrompt: "Don't have an account?",
    footerLink: "Sign up",
    footerHref: "/sign-up" as const,
  },
} as const;

export function AuthScreen({ mode }: AuthScreenProps) {
  const router = useRouter();
  const copy = COPY[mode];
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationVisible, setVerificationVisible] = useState(false);

  const openVerification = () => setVerificationVisible(true);

  return (
    <SafeAreaView className="flex-1 bg-app">
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 32 }}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <Pressable
            className="mb-4 h-10 w-10 items-center justify-center"
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel="Go back"
          >
            <SymbolView name="chevron.left" size={22} tintColor="#0D132B" />
          </Pressable>

          <Text className="text-h2 font-[Poppins-Bold] text-primary">
            {copy.title}
          </Text>
          <Text className="text-body-medium text-secondary mt-2">
            {copy.subtitle}
          </Text>

          <View className="relative my-6 items-center">
            <Text className="absolute left-8 top-6 text-lg">✨</Text>
            <Text className="absolute right-10 top-2 text-base">⭐</Text>
            <Text className="absolute right-16 bottom-4 text-sm text-lingua-blue">
              ✦
            </Text>
            <Image
              source={images.mascotAuth}
              style={{ width: 160, height: 160 }}
              contentFit="contain"
            />
          </View>

          <View className="gap-4">
            <AuthField
              label="Email"
              value={email}
              onChangeText={setEmail}
              placeholder="alex@gmail.com"
              keyboardType="email-address"
            />
            {mode === "sign-up" ? (
              <AuthField
                label="Password"
                value={password}
                onChangeText={setPassword}
                placeholder="••••••••"
                secureTextEntry
              />
            ) : null}
          </View>

          <Pressable
            className="bg-lingua-purple mt-6 h-[52px] items-center justify-center rounded-2xl active:opacity-90"
            onPress={openVerification}
          >
            <Text className="text-body-large font-[Poppins-SemiBold] text-white">
              {copy.primaryLabel}
            </Text>
          </Pressable>

          <View className="my-6 flex-row items-center">
            <View className="border-default h-px flex-1 border-t" />
            <Text className="text-body-small text-secondary mx-4">
              or continue with
            </Text>
            <View className="border-default h-px flex-1 border-t" />
          </View>

          <SocialAuthButton provider="google" onPress={openVerification} />
          <SocialAuthButton provider="facebook" onPress={openVerification} />
          <SocialAuthButton
            provider="apple"
            onPress={openVerification}
          />

          <View className="mt-4 flex-row items-center justify-center">
            <Text className="text-body-medium text-secondary">
              {copy.footerPrompt}{" "}
            </Text>
            <Link href={copy.footerHref} asChild>
              <Pressable>
                <Text className="text-body-medium font-[Poppins-SemiBold] text-lingua-purple">
                  {copy.footerLink}
                </Text>
              </Pressable>
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <VerificationModal
        visible={verificationVisible}
        onClose={() => setVerificationVisible(false)}
      />
    </SafeAreaView>
  );
}
