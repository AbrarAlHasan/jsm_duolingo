import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { SymbolView } from "expo-symbols";

type AuthFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address";
  autoCapitalize?: "none" | "sentences";
};

export function AuthField({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
}: AuthFieldProps) {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View className="border-default h-[72px] justify-center rounded-2xl border bg-white px-4">
      <Text className="text-caption text-secondary">{label}</Text>
      <View className="mt-0.5 flex-row items-center">
        <TextInput
          className="text-body-large min-h-[24px] flex-1 p-0 font-[Poppins-Regular] text-primary"
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={hidden}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          autoCorrect={false}
        />
        {secureTextEntry ? (
          <Pressable
            onPress={() => setHidden((prev) => !prev)}
            hitSlop={12}
            accessibilityRole="button"
            accessibilityLabel={hidden ? "Show password" : "Hide password"}
          >
            <SymbolView
              name={hidden ? "eye" : "eye.slash"}
              size={22}
              tintColor="#6B7280"
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
}
