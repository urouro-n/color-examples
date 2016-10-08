import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { ColorInfo } from './app/components/ColorInfo';

class Web extends Component {
  render() {
    var hex = '#000000';
    var regexp = /^#([a-f0-9]{6})$/;
    var matches = window.location.hash.match(regexp);

    if (matches) {
      hex = '#' + matches[1];
    }

    return (
      <View style={styles.container}>
        <ColorInfo hex={hex} />
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
