import React from 'react';
import { View, Text } from 'react-native';

class ListTasksScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tarefas</Text>
      </View>
    );
  }
}

export default ListTasksScreen;
