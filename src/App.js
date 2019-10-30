import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import OpenApp from './screens/OpenApp';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={require('./assets/images/Background.png')}>
        <OpenApp />
      </ImageBackground>
    );
  }
}
