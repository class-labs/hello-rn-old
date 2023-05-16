import { Text, View } from "react-native";

const tasks = [
  { id: 1, name: "Make coffee" },
  { id: 2, name: "Do laundry" },
  { id: 3, name: "Learn JavaScript" },
  { id: 4, name: "Buy milk" },
  { id: 5, name: "Order lunch" },
];

export function App() {
  return (
    <View style={{ padding: 40 }}>
      {tasks.map((task) => (
        <Text key={task.id}>{task.name}</Text>
      ))}
    </View>
  );
}
