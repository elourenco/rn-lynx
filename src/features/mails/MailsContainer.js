import { createStackNavigator } from 'react-navigation';
import InboxScreen from './InboxScreen';

const MailsContainer = createStackNavigator(
  {
    Inbox: { screen: InboxScreen }
  },
  {
    initialRouteName: 'Inbox'
  }
);

MailsContainer.navigationOptions = {
    tabBarLabel: 'Mail'
};

export default MailsContainer;
