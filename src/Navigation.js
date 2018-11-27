import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import AuthenticationContainer from '@features/authentication/AuthenticationContainer';
import OnboardContainer from '@features/onboard/OnboardContainer';

import ListTasksScreen from '@features/tasks/ListTasksScreen';
import SettingsScreen from '@features/settings/SettingsScreen';
import ListNotesScreen from '@features/notes/ListNotesScreen';
import DashboardScreen from '@features/dashboard/DashboardScreen';

const MainContainer = createStackNavigator({
    Dashboard: { screen: DashboardScreen },
    ListTasks: { screen: ListTasksScreen },
    Settings: { screen: SettingsScreen },
    Notes: { screen: ListNotesScreen }
}, {
    initialRouteName: 'Dashboard',
    navigationOptions: {
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0
      }
    }
  });

const appSwitchNavigator = createSwitchNavigator(
  {
    MainContainer,
    OnboardContainer,
    AuthenticationContainer
  },
  {
    initialRouteName: 'MainContainer'
  }
);

export default createAppContainer(appSwitchNavigator);
