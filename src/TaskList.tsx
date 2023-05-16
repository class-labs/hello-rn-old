import { Text } from 'react-native';

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
        <Text>{task.name}</Text>
      ))}
    </>
  );
}
