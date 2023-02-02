import { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { Task } from '../types/Task';

type Props = {
  onSubmit: (newTask: Task) => void;
};

export function NewTaskForm(props: Props) {
  const [text, setText] = useState('');
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
        value={text}
        onChangeText={(newText) => {
          setText(newText);
        }}
      />
      <Button
        title="Add"
        onPress={() => {
          props.onSubmit({
            id: Math.floor(Math.random() * 100000),
            name: text,
            isDone: false,
          });
          setText('');
        }}
      />
    </View>
  );
}
