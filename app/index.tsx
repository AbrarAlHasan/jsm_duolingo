import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";

import { SafeAreaView } from "@/components/safe-area-view";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-app">
      <StatusBar style="dark" />

      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-h2 font-[Poppins-Bold] text-primary">Home</Text>
        <Text className="text-body-medium text-secondary mt-2 text-center">
          You are signed in. The full home UI comes in a later lesson.
        </Text>

        <Link href="/onboarding" asChild>
          <Pressable className="mt-8">
            <Text className="text-body-medium font-[Poppins-SemiBold] text-lingua-purple">
              View onboarding
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}
