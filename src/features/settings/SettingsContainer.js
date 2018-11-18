import { createStackNavigator } from 'react-navigation';
import SettingsScreen from './SettingsScreen';

const SettingsContainer = createStackNavigator(
  {
    Settings: { screen: SettingsScreen }
  },
  {
    initialRouteName: 'Settings'
  }
);

SettingsContainer.navigationOptions = {
    tabBarLabel: 'Configuração'
};

export default SettingsContainer;
