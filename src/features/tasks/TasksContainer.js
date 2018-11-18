import { createStackNavigator } from 'react-navigation';
import ListTasksScreen from './ListTasksScreen';

const TasksContainer = createStackNavigator(
  {
    ListTasks: { screen: ListTasksScreen }
  },
  {
    initialRouteName: 'ListTasks'
  }
);

TasksContainer.navigationOptions = {
    tabBarLabel: 'Tarefas'
};

export default TasksContainer;
