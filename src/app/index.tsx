import { Stack } from "expo-router";
import { Button, YStack } from "tamagui";

export default () => {
  return (
    <YStack
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="#ddf"
    >
      <Stack.Screen options={{ title: "Home" }} />
      <Button>Click Me</Button>
    </YStack>
  );
};
