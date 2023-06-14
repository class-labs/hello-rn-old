import { Stack } from "expo-router";

import { RootProvider } from "../src/RootProvider";

export default () => {
  return (
    <RootProvider>
      <Stack />
    </RootProvider>
  );
};
