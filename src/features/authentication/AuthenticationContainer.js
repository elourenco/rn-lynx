import { createStackNavigator } from 'react-navigation';
import AuthenticationScreen from './AuthenticationScreen';

const AuthenticationContainer = createStackNavigator(
  {
    Authentication: { screen: AuthenticationScreen }
  },
  {
    initialRouteName: 'Authentication',
    mode: 'modal',
    headerMode: 'none'
  }
);

export default AuthenticationContainer;
