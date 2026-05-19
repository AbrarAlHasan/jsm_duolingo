import { styled } from "nativewind";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

/**
 * SafeAreaView is a third-party component — NativeWind only auto-polyfills
 * `react-native` imports (View, Text, etc.). Use this wrapper for className.
 */
export const SafeAreaView = styled(RNSafeAreaView);
