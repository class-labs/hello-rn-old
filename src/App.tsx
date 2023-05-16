import { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { TaskList } from './TaskList';

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
        <TaskList taskList={taskItems} />
        {/* TODO: Create a NewTaskForm component, it should render a TextInput and a button */}
        <NewTaskForm />
      </View>
    </SafeAreaView>
  );
}
