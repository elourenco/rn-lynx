import { createStackNavigator } from 'react-navigation';
import ListNotesScreen from './ListNotesScreen';

const NotesContainer = createStackNavigator(
  {
    Notes: { screen: ListNotesScreen }
  },
  {
    initialRouteName: 'Notes'
  }
);

NotesContainer.navigationOptions = {
    tabBarLabel: 'Notas'
};

export default NotesContainer;
