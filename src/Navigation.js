import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import TasksContainer from '@features/tasks/TasksContainer';
import MailsContainer from '@features/mails/MailsContainer';
import SettingsContainer from '@features/settings/SettingsContainer';
import NotesContainer from '@features/notes/NotesContainer';

import AuthenticationContainer from '@features/authentication/AuthenticationContainer';
import OnboardContainer from '@features/onboard/OnboardContainer';

const MainTabContainer = createBottomTabNavigator({
  Mails: MailsContainer,
  Tasks: TasksContainer,
  Notes: NotesContainer,
  Settings: SettingsContainer

}, {
    initialRouteName: 'Mails',
    swipeEnabled: false,
    lazy: true,
    mode: 'card',
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      pressOpacity: 2,
      animationEnabled: true
    }
  });

export default createSwitchNavigator(
  {
    OnboardContainer,
    MainTabContainer,
    AuthenticationContainer
  },
  {
    initialRouteName: 'AuthenticationContainer'
  }
);
