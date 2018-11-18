import React from 'react';
import { View, Text } from 'react-native';
import Browser from '../../components/browser';
import SocialButton from '../../components/social-button';

class AuthenticationScreen extends React.Component {

  loginWithFacebook = () => Browser.show('https://localhost:3000/authentication/social/facebook');

  loginWithGoogle = () => Browser.show('https://localhost:3000/authentication/social/google');

  loginWithOutlook = () => Browser.show('https://localhost:3000/authentication/social/outlook');

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Lynx</Text>
        </View>
        <View style={{ height: 150 }}>
          <SocialButton
            socialType="google"
            color="#cb3f22"
            title="Login com Google"
            onPress={this.loginWithGoogle}
          />
        </View>
      </View>
    );
  }
}

export default AuthenticationScreen;
