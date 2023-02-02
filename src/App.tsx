import { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { NewTaskForm } from './components/NewTaskForm';
import { TaskList } from './components/TaskList';
import { Task } from './types/Task';

const initialTasks: Array<Task> = [
  { id: 1, name: 'Make coffee', isDone: false },
  { id: 2, name: 'Do Laundry', isDone: false },
];

export function App() {
  const [taskItems, setTaskItems] = useState(initialTasks);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 20 }}>
        <TaskList
          taskList={taskItems}
          onTaskListChange={(taskList) => {
            setTaskItems(taskList);
          }}
        />
        <NewTaskForm
          onSubmit={(newTask) => {
            setTaskItems([...taskItems, newTask]);
          }}
        />
      </View>
    </SafeAreaView>
  );
}
