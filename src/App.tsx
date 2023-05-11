import React from "react";
import { TamaguiProvider } from "tamagui";
import { useFonts } from "expo-font";

import config from "./config/tamagui.config";
import { Home } from "./Home";

export function App() {
  const [fontsLoaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config} disableInjectCSS>
      <Home />
    </TamaguiProvider>
  );
}
