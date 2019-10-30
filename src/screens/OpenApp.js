import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Button from '../components/Button';
import Header from '../common/Header';

export default class OpenApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  render() {
    return (
      <View style={[ styles.fill ]}>
        <Header back={true} />
        <View style={[ styles.fill, styles.viewLogo ]}>
            <Image style={styles.image} source={require('../assets/images/LogoOpen.png')} />
        </View>
        <View style={styles.viewButton}>
            <Button title="Sign In" />
            <Button button2={true} title="Create Account" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    fill: {
        flex: 1
    },
    viewLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    image: {
        width: 150,
        height: 100,
        resizeMode: 'contain'
    },
    viewButton: {
        marginBottom: 40,
    }
})