import type { ReactElement } from "react";
import { Platform, Pressable, Text, View } from "react-native";
import { SymbolView } from "expo-symbols";

type SocialProvider = "google" | "facebook" | "apple";

type SocialAuthButtonProps = {
  provider: SocialProvider;
  onPress: () => void;
};

const LABELS: Record<SocialProvider, string> = {
  google: "Continue with Google",
  facebook: "Continue with Facebook",
  apple: "Continue with Apple",
};

function GoogleIcon() {
  return (
    <View className="h-6 w-6 flex-row items-center justify-center">
      <Text className="text-[15px] font-[Poppins-Bold] leading-none text-[#EA4335]">
        G
      </Text>
    </View>
  );
}

function FacebookIcon() {
  return (
    <View className="h-6 w-6 items-center justify-center rounded-full bg-[#1877F2]">
      <Text className="text-[14px] font-[Poppins-Bold] leading-none text-white">
        f
      </Text>
    </View>
  );
}

function AppleIcon() {
  if (Platform.OS === "ios") {
    return (
      <SymbolView name="apple.logo" size={22} tintColor="#0D132B" weight="medium" />
    );
  }

  return (
    <View className="h-6 w-6 items-center justify-center">
      <Text className="text-[18px] font-[Poppins-Bold] leading-none text-primary">
        {"\uF8FF"}
      </Text>
    </View>
  );
}

const ICONS: Record<SocialProvider, () => ReactElement> = {
  google: GoogleIcon,
  facebook: FacebookIcon,
  apple: AppleIcon,
};

export function SocialAuthButton({ provider, onPress }: SocialAuthButtonProps) {
  const Icon = ICONS[provider];

  return (
    <Pressable
      className="border-default mb-3 h-[52px] flex-row items-center justify-center rounded-2xl border bg-white active:opacity-90"
      onPress={onPress}
    >
      <View className="absolute left-5">
        <Icon />
      </View>
      <Text className="text-body-medium font-[Poppins-Medium] text-primary">
        {LABELS[provider]}
      </Text>
    </Pressable>
  );
}
