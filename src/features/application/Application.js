import React from 'react';
import { bindActionCreators } from 'redux';
import { AppState, Linking, NetInfo } from 'react-native';
import { connect } from 'react-redux';
import applicationAction from '@features/application/ApplicationActions';
import authenticationAction from '@features/authentication/AuthenticationActions';
import navigation from '@src/Navigation';
import LoadingView from '@components/loading-view';
import vasern from '@database/Vasern';

class Application extends React.Component {
  state = {
    ready: false
  }

  componentDidMount() {
    vasern.onLoaded(() => {
      this.setState((prevState, props) => {
        this.props.authentication.signCheck();
        return { ready: true };
     });
    });
    AppState.addEventListener('change', this.props.application.statusChange);
    NetInfo.addEventListener('connectionChange', this.props.application.statusConnectionChange);
    Linking.addEventListener('url', this.props.application.handleOpenURL);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.props.application.statusChange);
    NetInfo.removeEventListener('connectionChange', this.props.application.statusConnectionChange);
    Linking.removeEventListener('url', this.props.application.handleOpenURL);
  }

  render() {
    const { ready } = this.state;
    if (!ready) {
      return (<LoadingView />);
    }

    const AppContainer = navigation(this.props.authented);
    return <AppContainer />;
  }
}

const mapStateToProps = state => ({
  authented: state.authentication.isAuthented
});

const mapDispatchToProps = dispatch => ({
  application: bindActionCreators(applicationAction, dispatch),
  authentication: bindActionCreators(authenticationAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
