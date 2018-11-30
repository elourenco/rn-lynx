import React from 'react';
import { View } from 'react-native';
import ActionSheet from 'react-native-actionsheet';

class Content extends React.Component {
  openMenu() {
    if (this._actionSheet) {
      this._actionSheet.show();
    }
  }

  render() {
    const { children, style } = this.props;
    return (
      <View style={[style, { flex: 1 }]}>
        {children}
        <ActionSheet
          ref={c => this._actionSheet = c}
          title="Menu"
          options={['Perfil', 'Sair', 'Cancelar']}
          cancelButtonIndex={2}
          destructiveButtonIndex={1}
          onPress={(index) => { /* do something */ }}
        />
      </View>
    );
  }
}

export default Content;
