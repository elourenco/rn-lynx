import React from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import Content from '@components/content';
import CustomHeaderLeft from '@components/custom-header-left';
import ProfileButton from '@components/profile-button';

class DashboardScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const handlerOpenMenu = navigation.getParam('openMenuCick', () => {});
    return {
      headerLeft: <CustomHeaderLeft />,
      headerRight: <ProfileButton onPress={() => handlerOpenMenu()} />,
      headerStyle: {
        elevation: 0,
        borderBottomWidth: 0
      }
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ openMenuCick: () => this._content.openMenu() });
  }

  render() {
    return (
      <Content ref={c => { this._content = c; }} withMenu>
        <Text>.</Text>
      </Content>
    );
  }
}

export default connect(null)(DashboardScreen);
