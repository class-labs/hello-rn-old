import { useState } from "react";
import { Button, SafeAreaView, Text, View } from "react-native";

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
      <View style={{ padding: 40 }}>
        {tasks.map((task) => (
          <Text key={task.id}>{task.name}</Text>
        ))}
      </View>
      <Button
        title="Add new task"
        onPress={() => {
          const newTask = { id: 6, name: "Buy shoes" };
          setTasks([...tasks, newTask]);
        }}
      />
    </SafeAreaView>
  );
}
