import { Pressable, Text, View } from 'react-native';
import { Task } from '../types/Task';

type Props = {
  task: Task;
  onTaskChange: (newTask: Task) => void;
};

export function TaskListItem(props: Props) {
  const { task, onTaskChange } = props;
  return (
    <Pressable
      onPress={() => {
        onTaskChange({ ...task, isDone: !task.isDone });
      }}
    >
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
        <Text>{task.isDone ? '✅' : '⌛️'}</Text>
      </View>
    </Pressable>
  );
}
