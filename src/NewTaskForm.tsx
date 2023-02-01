import { Button, TextInput, View } from 'react-native';

export function NewTaskForm() {
  return (
    <View style={{ flexDirection: 'row' }}>
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          flex: 1,
          paddingHorizontal: 5,
          borderRadius: 4,
        }}
      />
      <Button title="Add" />
    </View>
  );
}
