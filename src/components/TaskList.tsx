import { View } from 'react-native';
import { Task } from '../types/Task';
import { TaskListItem } from './TaskListItem';

type Props = {
  taskList: Array<Task>;
  onTaskListChange: (taskList: Array<Task>) => void;
};

export function TaskList(props: Props) {
  const { taskList, onTaskListChange } = props;
  return (
    <View style={{}}>
      {taskList.map((task) => (
        <TaskListItem
          task={task}
          onTaskChange={(newTask) => {
            const newTaskList = taskList.map((task) =>
              task.id === newTask.id ? newTask : task,
            );
            onTaskListChange(newTaskList);
          }}
        />
      ))}
    </View>
  );
}
