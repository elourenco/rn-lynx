import React from 'react';
import { bindActionCreators } from 'redux';
import { AppState, Linking, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import applicationAction from '@features/application/ApplicationActions';
import authenticationAction from '@features/authentication/AuthenticationActions';
import Navigation from '@src/Navigation';

class Application extends React.Component {
  componentDidMount() {
    AppState.addEventListener('change', this.props.application.appStateChange);
    NetInfo.addEventListener('connectionChange', this.props.application.appStateConnectionChange);
    Linking.addEventListener('url', this.props.authentication.handleOpenURL);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.props.application.appStateChange);
    NetInfo.removeEventListener('connectionChange', this.props.application.appStateConnectionChange);
    Linking.removeEventListener('url', this.props.authentication.handleOpenURL);
  }

  render() {
    return <Navigation />;
  }
}

const mapDispatchToProps = dispatch => ({
  application: bindActionCreators(applicationAction, dispatch),
  authentication: bindActionCreators(authenticationAction, dispatch)
});

export default connect(null, mapDispatchToProps)(Application);
