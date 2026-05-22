import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";

type VerificationModalProps = {
  visible: boolean;
  onClose: () => void;
};

const CODE_LENGTH = 6;

export function VerificationModal({ visible, onClose }: VerificationModalProps) {
  const router = useRouter();
  const inputRef = useRef<TextInput>(null);
  const [code, setCode] = useState("");

  useEffect(() => {
    if (visible) {
      setCode("");
      const timer = setTimeout(() => inputRef.current?.focus(), 300);
      return () => clearTimeout(timer);
    }
    Keyboard.dismiss();
    return undefined;
  }, [visible]);

  const handleChange = (text: string) => {
    const digits = text.replace(/\D/g, "").slice(0, CODE_LENGTH);
    setCode(digits);

    if (digits.length === CODE_LENGTH) {
      Keyboard.dismiss();
      onClose();
      router.replace("/");
    }
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Pressable
          className="flex-1 justify-end bg-black/40"
          onPress={onClose}
        >
          <Pressable
            className="rounded-t-3xl bg-white px-6 pb-10 pt-6"
            onPress={(event) => event.stopPropagation()}
          >
            <View className="mb-2 h-1 w-10 self-center rounded-full bg-border" />

            <Text className="text-h3 text-primary text-center">
              Check your email
            </Text>
            <Text className="text-body-medium text-secondary mt-2 text-center leading-5">
              We sent a verification code to your email. Enter the 6-digit
              code below to continue.
            </Text>

            <Pressable
              className="mt-8 flex-row justify-between gap-2"
              onPress={() => inputRef.current?.focus()}
            >
              {Array.from({ length: CODE_LENGTH }, (_, index) => {
                const digit = code[index] ?? "";
                const isActive = index === code.length;

                return (
                  <View
                    key={index}
                    className={`h-14 flex-1 items-center justify-center rounded-xl border-2 ${
                      isActive
                        ? "border-lingua-purple bg-surface"
                        : "border-default bg-white"
                    }`}
                  >
                    <Text className="text-h3 font-[Poppins-SemiBold] text-primary">
                      {digit}
                    </Text>
                  </View>
                );
              })}
            </Pressable>

            <TextInput
              ref={inputRef}
              value={code}
              onChangeText={handleChange}
              keyboardType="number-pad"
              maxLength={CODE_LENGTH}
              textContentType="oneTimeCode"
              autoComplete="one-time-code"
              className="absolute h-px w-px opacity-0"
              accessibilityLabel="Verification code"
            />
          </Pressable>
        </Pressable>
      </KeyboardAvoidingView>
    </Modal>
  );
}
