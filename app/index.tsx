import { Text, View } from "react-native";

import { SafeAreaView } from "@/components/safe-area-view";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-app">
      <View className="flex-1 items-center justify-center px-6">
        <Text className="text-h1 text-primary">lingua</Text>
        <Text className="text-body-medium text-secondary mt-2 text-center">
          Design system ready — use text-h1, bg-surface, text-lingua-purple,
          etc.
        </Text>
      </View>
    </SafeAreaView>
  );
}
