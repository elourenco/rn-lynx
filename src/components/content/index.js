import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ActionSheet from 'react-native-actionsheet';

const MenuProfile = (props) => (
  <ActionSheet
    ref={props.onRef}
    title="Menu"
    options={['Perfil', 'Sair', 'Cancelar']}
    cancelButtonIndex={2}
    destructiveButtonIndex={1}
    onPress={(index) => { /* do something */ }}
  />
);

class Content extends React.Component {
  openMenu() {
    this._actionSheet && this._actionSheet.show();
  }

  render() {
    const { children, style, withMenu } = this.props;
    return (
      <View style={[style, { flex: 1 }]}>
        {children}
        {withMenu && <MenuProfile onRef={c => { this._actionSheet = c; }} />}
      </View>
    );
  }
}

export default Content;
