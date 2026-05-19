import { useFonts } from "expo-font";

import { fontAssets } from "@/theme/fonts";

export function useLinguaFonts() {
  const [loaded, error] = useFonts(fontAssets);

  return { loaded, error };
}
