import React from 'react';
import { View } from 'react-native';

class Content extends React.Component {
  render() {
    const { children, style } = this.props;
    return (
      <View style={[style, { flex: 1 }]}>
        {children}
      </View>
    );
  }
}

export default Content;
