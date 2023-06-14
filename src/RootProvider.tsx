import React, { ReactNode } from "react";
import { TamaguiProvider, Theme } from "tamagui";
import { useFonts } from "expo-font";

import config from "./config/tamagui.config";

export function RootProvider(props: { children: ReactNode }) {
  const [fontsLoaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <TamaguiProvider config={config} disableInjectCSS>
      <Theme name="light">{props.children}</Theme>
    </TamaguiProvider>
  );
}
