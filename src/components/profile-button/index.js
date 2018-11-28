import React from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 16,
    justifyContent: 'center'
  },
  image: {
    height: 36,
    width: 36,
    borderRadius: 18
  }
});

class ProfileButton extends React.Component {
  render() {
    return this.props.avatar ? (
      <View style={styles.container}>
        <Image style={styles.image} resizeMode="contain" source={{ uri: this.props.avatar }} />
      </View>
    ) : null;
  }
}

const mapStateToProps = state => ({
  avatar: state.authentication.avatar
});

export default connect(mapStateToProps)(ProfileButton);
