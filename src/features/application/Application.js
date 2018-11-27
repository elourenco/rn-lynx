import React from 'react';
import { bindActionCreators } from 'redux';
import { AppState, Linking, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import applicationAction from '@features/application/ApplicationActions';
import AppContainer from '@src/Navigation';

class Application extends React.Component {
  componentDidMount() {
    AppState.addEventListener('change', this.props.application.appStateChange);
    NetInfo.addEventListener('connectionChange', this.props.application.appStateConnectionChange);
    Linking.addEventListener('url', this.props.application.appHandleOpenURL);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.props.application.appStateChange);
    NetInfo.removeEventListener('connectionChange', this.props.application.appStateConnectionChange);
    Linking.removeEventListener('url', this.props.application.appHandleOpenURL);
  }

  render() {
    return <AppContainer />;
  }
}

const mapDispatchToProps = dispatch => ({
  application: bindActionCreators(applicationAction, dispatch)
});

export default connect(null, mapDispatchToProps)(Application);
