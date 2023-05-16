import { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

// Task 2
// Add another button to decrement the count

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
      </View>
    </SafeAreaView>
  );
}
