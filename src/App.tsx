import { SafeAreaView, View, Text, Button } from 'react-native';
export function App() {
  let count = 0;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text>Count: {count}</Text>
        <Button title="Click me" />
      </View>
    </SafeAreaView>
  );
}
