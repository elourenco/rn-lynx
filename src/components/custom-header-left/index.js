import React from 'react';
import { connect } from 'react-redux';
import { Text, View, StyleSheet } from 'react-native';
import moment from 'moment';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 8
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 12,
    fontWeight: '100'
  }
});

class CustomHeaderLeft extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <View style={styles.container}>
        <Text allowFontScaling={false} style={styles.title}>
          {title}
        </Text>
        <Text allowFontScaling={false} style={styles.subtitle}>
          {subtitle}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  title: state.authentication.name && state.authentication.name.split(' ')[0],
  subtitle: moment().format('dddd, MMMM [de] DD [de] YYYY')
});

export default connect(mapStateToProps)(CustomHeaderLeft);
