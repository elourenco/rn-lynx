import React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import CustomHeaderLeft from '@components/custom-header-left';
import ProfileButton from '@components/profile-button';

class DashboardScreen extends React.Component {
  static navigationOptions = {
      headerLeft: <CustomHeaderLeft />,
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

export default connect(null)(DashboardScreen);
