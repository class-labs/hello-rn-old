import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import { NewTaskForm } from "./components/NewTaskForm";

const initialTasks = [
  { id: 1, name: "Make coffee" },
  { id: 2, name: "Do laundry" },
  { id: 3, name: "Learn JavaScript" },
  { id: 4, name: "Buy milk" },
  { id: 5, name: "Order lunch" },
];

export function App() {
  const [tasks, setTasks] = useState(initialTasks);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.taskList}>
          {tasks.map((task) => (
            <Text key={task.id} style={styles.taskListItem}>
              {task.name}
            </Text>
          ))}
        </View>
        <NewTaskForm
          onNewTaskSubmit={(taskName) => {
            const newTask = {
              id: Date.now(),
              name: taskName,
            };
            setTasks([...tasks, newTask]);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {},
  taskList: {
    gap: 10,
    padding: 14,
  },
  taskListItem: {
    fontSize: 17,
  },
});
