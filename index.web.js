import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { ColorInfo } from './app/components/ColorInfo';

class Web extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ColorInfo hex={'#ff0000'} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '64px'
  }
});

AppRegistry.registerComponent('Web', () => Web);
AppRegistry.runApplication('Web', { rootTag: document.getElementById('app') });
