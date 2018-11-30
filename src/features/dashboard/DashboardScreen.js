import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Content from '@components/content';
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
      <Content>
        <Text>Dashboard</Text>
      </Content>
    );
  }
}

export default connect(null)(DashboardScreen);
