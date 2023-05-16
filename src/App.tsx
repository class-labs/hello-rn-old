import { useState } from 'react';
import { SafeAreaView, View, Text, Button } from 'react-native';
type Task = {
  id: number;
  name: string;
};
const initialTasks: Array<Task> = [
  { id: 1, name: 'Make coffee' },
  { id: 2, name: 'Do Laundry' },
];
export function App() {
  const [taskItems, setTaskItems] = useState(initialTasks);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <Text>Tasks:</Text>
        {/* TODO: loop through the tasks and for each one display task.title  */}
        <Button
          title="Add new task"
          onPress={() => {
            // TODO
          }}
        />
      </View>
    </SafeAreaView>
  );
}
