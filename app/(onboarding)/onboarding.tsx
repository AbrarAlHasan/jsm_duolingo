import { Image } from "expo-image";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";

import { SafeAreaView } from "@/components/safe-area-view";
import { images } from "@/constants/images";

const SPEECH_BUBBLES = [
  {
    text: "Hello!",
    style: {
      left: 4,
      top: 52,
      transform: [{ rotate: "-12deg" }],
    } as StyleProp<ViewStyle>,
    bubbleClass: "bg-[#D6EBFF]",
    textClass: "text-primary",
  },
  {
    text: "¡Hola!",
    style: {
      right: 0,
      top: 28,
      transform: [{ rotate: "14deg" }],
    } as StyleProp<ViewStyle>,
    bubbleClass: "bg-[#E8E4FF]",
    textClass: "text-lingua-purple",
  },
  {
    text: "你好!",
    style: {
      right: 8,
      top: 168,
      transform: [{ rotate: "-10deg" }],
    } as StyleProp<ViewStyle>,
    bubbleClass: "bg-[#FFE5DC]",
    textClass: "text-[#E8483F]",
  },
] as const;

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-app">
      <StatusBar style="dark" />

      <View className="flex-1 px-6">
        <View className="flex-row items-center justify-center gap-2 pt-2">
          <Image
            source={images.mascotLogo}
            style={{ width: 28, height: 28 }}
            contentFit="contain"
          />
          <Text className="text-h3 font-[Poppins-Bold] text-primary">
            muolingo
          </Text>
        </View>

        <View className="mt-10">
          <Text className="text-h1 text-left text-primary leading-tight">
            Your AI language{"\n"}
            <Text className="text-lingua-purple">teacher.</Text>
          </Text>
          <Text className="text-body-large text-secondary mt-4 text-left leading-6">
            Real conversations, personalized lessons, anytime, anywhere.
          </Text>
        </View>

        <View className="flex-1 items-center justify-center py-2">
          <View className="relative h-[360px] w-full max-w-[340px]">
            {SPEECH_BUBBLES.map((bubble) => (
              <View
                key={bubble.text}
                className={`absolute z-10 rounded-2xl px-4 py-2 ${bubble.bubbleClass}`}
                style={bubble.style}
              >
                <Text
                  className={`text-body-medium font-[Poppins-SemiBold] ${bubble.textClass}`}
                >
                  {bubble.text}
                </Text>
              </View>
            ))}

            <View className="absolute inset-0 items-center justify-end">
              <Image
                source={images.mascotWelcome}
                style={{ width: 280, height: 280 }}
                contentFit="contain"
              />
            </View>
          </View>
        </View>

        <Link href="/sign-up" asChild>
          <Pressable className="bg-lingua-purple relative mb-8 h-[56px] w-full justify-center rounded-full active:opacity-90">
            <Text className="text-center text-body-large font-[Poppins-SemiBold] text-white">
              Get Started
            </Text>
            <View
              className="absolute right-6 top-0 h-full justify-center"
              pointerEvents="none"
            >
              <Text className="text-[22px] leading-none text-white">›</Text>
            </View>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}
