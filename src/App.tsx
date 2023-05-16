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
        {taskItems.map((task) => (
          <Text>{task.name}</Text>
        ))}
        <Button
          title="Add new task"
          onPress={() => {
            const newTask = { id: 3, name: 'Learn TypeScript' };
            setTaskItems([...taskItems, newTask]);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
