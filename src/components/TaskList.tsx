import { Text, View } from 'react-native';
import { Task } from '../types/Task';

type Props = {
  taskList: Array<Task>;
};

// TODO: Make each task item pressable (hint), pressing it will toggle the done status
// TODO: Consider the "icon" ⌛️ for not done tasks, but your call.

export function TaskList(props: Props) {
  return (
    <View style={{}}>
      {props.taskList.map((task) => (
        <View
          style={{
            padding: 10,
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#ddd',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text>{task.name}</Text>
          <Text>✅</Text>
        </View>
      ))}
    </View>
  );
}
