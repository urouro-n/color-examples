import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';

export class ColorBox extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    var style = {
      backgroundColor: this.props.color,
      width: '300px',
      height: '300px',
      borderRadius: '8px'
    };

    return (
      <View style={style} />
    );
  }
};
