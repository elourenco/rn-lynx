import { createStackNavigator } from 'react-navigation';
import IntroductionScreen from './IntroductionScreen';

const OnboardContainer = createStackNavigator(
  {
    Introduction: IntroductionScreen
  },
  {
    initialRouteName: 'Introduction',
    mode: 'card',
    headerMode: 'none'
  }
);

export default OnboardContainer;
