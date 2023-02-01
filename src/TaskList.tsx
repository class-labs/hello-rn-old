import { Text, View } from 'react-native';

type Task = {
  id: number;
  name: string;
};

type Props = {
  taskList: Array<Task>;
};

export function TaskList(props: Props) {
  return (
    <>
      {props.taskList.map((task) => (
        <View style={{ padding: 4, marginBottom: 10 }}>
          <Text>{task.name}</Text>
        </View>
      ))}
    </>
  );
}
