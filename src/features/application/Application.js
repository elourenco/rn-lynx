import React from 'react';
import { bindActionCreators } from 'redux';
import { AppState, Linking, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import applicationAction from '@features/application/ApplicationActions';
import navigation from '@src/Navigation';

class Application extends React.Component {
  componentDidMount() {
    AppState.addEventListener('change', this.props.application.statusChange);
    NetInfo.addEventListener('connectionChange', this.props.application.statusConnectionChange);
    Linking.addEventListener('url', this.props.application.handleOpenURL);
    // Linking.getInitialURL().then((url) => {
    //   if (url) {
    //     this.props.application.handleOpenURL({ url });
    //   }
    // });
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.props.application.statusChange);
    NetInfo.removeEventListener('connectionChange', this.props.application.statusConnectionChange);
    Linking.removeEventListener('url', this.props.application.handleOpenURL);
  }

  render() {
    const AppContainer = navigation(this.props.authented);
    return <AppContainer />;
  }
}

const mapStateToProps = state => ({
  authented: state.authentication.accessToken !== null
});

const mapDispatchToProps = dispatch => ({
  application: bindActionCreators(applicationAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
