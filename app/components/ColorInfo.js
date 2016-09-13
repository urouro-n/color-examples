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

    // TODO:
    var rgb = 'rgb(255, 0, 0)';
    var swift = 'UIColor(red: 1.0, green: 0.0, blue: 0.0, alpha: 1.0)';
    var objc = '[UIColor colorWithRed:0.85f green:0.85f blue:0.86f alpha:1.0f]';

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
