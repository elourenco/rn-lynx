import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import Icons from '../../Icons';

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 24
  },
  text: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: '#fff',
    fontWeight:'bold'
  }
});

export default class SocialButton extends React.PureComponent {
  static propTypes = {
    socialType: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    const { socialType, color, onPress, title } = this.props;
    return (
      <View style={styles.container}>
        <Icons.Button
          name={socialType}
          backgroundColor={color}
          onPress={onPress}
        >
          <Text style={styles.text}>
            {title}
          </Text>
        </Icons.Button>
      </View>
    );
  }
}
