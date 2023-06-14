import { Stack } from "expo-router";

import { RootProvider } from "../RootProvider";

export default () => {
  return (
    <RootProvider>
      <Stack />
    </RootProvider>
  );
};
