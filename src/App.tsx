import { useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';

export function App() {
  const [count, setCount] = useState(0);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text>Count: {count}</Text>
        <Button
          title="Click me"
          onPress={() => {
            setCount((count) => count + 1);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
