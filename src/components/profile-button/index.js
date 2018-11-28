import React from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';

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

const ImageButton = ({ url, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image style={styles.image} resizeMode="contain" source={{ uri: url }} />
  </TouchableOpacity>
);

class ProfileButton extends React.Component {
  render() {
    const { openProfileOnPress, avatar } = this.props;

    return this.props.avatar ? (
      <View style={styles.container}>
        <ImageButton url={avatar} onPress={openProfileOnPress} />
      </View>
    ) : null;
  }
}

const mapStateToProps = state => ({
  avatar: state.authentication.avatar
});

export default connect(mapStateToProps)(ProfileButton);
