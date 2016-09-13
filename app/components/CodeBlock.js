import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

export class CodeBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          {this.props.title}
        </View>
        <TextInput
          style={styles.code}
          editable={false}
          defaultValue={this.props.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'block',
    marginTop: '4px',
    marginBottom: '4px'
  },
  title: {
    backgroundColor: '#f7f7f7',
    color: '#666',
    fontFamily: '"Lato", Arial, sans-serif',
    position: 'relative',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
    top: '4px',
    display: 'inline-block',
    fontSize: '70%',
    marginBottom: 0,
    paddingVertial: '3px',
    paddingHorizontal: '10px',
    borderTopLeftRadius: 'left',
    borderTopRightRadius: 'right',
    lineHeight: '2em'
  },
  code: {
    backgroundColor: '#f7f7f7',
    borderRadius: '3px',
    color: '#333',
    display: 'block',
    fontFamily: 'Menlo Courier, monospace',
    fontSize: '85%',
    lineHeight: 1.4,
    marginTop: 0,
    marginBottom: 0,
    marginHorizontal: 0,
    padding: '16px'
  }
});
