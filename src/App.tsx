import { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

export function App() {
  const [count, setCount] = useState(71);
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 10 }}>
        <Text>Count: {count}</Text>
        <Button
          onPress={() => {
            setCount(count + 1);
          }}
          title="Increment"
        />
        <Button
          onPress={() => {
            setCount(count - 1);
          }}
          title="Decrement"
        />
        <Button
          onPress={() => {
            setCount(0);
          }}
          title="Reset"
        />
      </View>
    </SafeAreaView>
  );
}
