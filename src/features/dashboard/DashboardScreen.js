import React from 'react';
import { View, Text } from 'react-native';
import CustomHeaderTitle from '@components/custom-header-title';
import ProfileButton from '@components/profile-button';

class DashboardScreen extends React.Component {
  static navigationOptions = {
    headerLeft: <CustomHeaderTitle title="Olá, Eduardo" subtitle="Terça-feira, 27 de Novembro de 2018" />,
    headerRight: <ProfileButton />,
    headerStyle: {
      elevation: 0,
      borderBottomWidth: 0
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard</Text>
      </View>
    );
  }
}

export default DashboardScreen;
