import "../global.css";

import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { useLinguaFonts } from "@/hooks/use-lingua-fonts";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { loaded, error } = useLinguaFonts();

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
