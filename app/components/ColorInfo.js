import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { CodeBlock } from './CodeBlock';
import { ColorBox } from './ColorBox';

export class ColorInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var hex = this.props.hex;

    var regexpResult = /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(hex);
    if (!regexpResult) {
      return (
        <View style={styles.container}>
          Error
        </View>
      );
    }

    var red = parseInt(regexpResult[1], 16);
    var green = parseInt(regexpResult[2], 16);
    var blue = parseInt(regexpResult[3], 16);

    var rgb = 'rgb(' + red + ', ' + green + ', ' + blue + ')';

    // TODO:
    var swift = 'UIColor(red: ' + (red/255.0) + ', green: ' + (green/255.0) + ', blue: ' + (blue/255.0) + ', alpha: 1.0)';
    var objc = '[UIColor colorWithRed:' + (red/255.0) + 'f green:' + (green/255.0) + 'f blue:' + (blue/255.0) + 'f alpha:1.0f]';

    var codeBlocksStyle = {
      width: '100%'
    };

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{hex}</Text>
        <ColorBox color={hex} />
        <View style={codeBlocksStyle}>
          <CodeBlock title={'hex'} text={hex} />
          <CodeBlock title={'RGB'} text={rgb} />
          <CodeBlock title={'Swift'} text={swift} />
          <CodeBlock title={'Objective-C'} text={objc} />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    alignContent: 'center',
    width: '570px'
  },
  title: {
    color: '#333333',
    fontSize: '240%',
    fontWeight: 'bold'
  }
});
