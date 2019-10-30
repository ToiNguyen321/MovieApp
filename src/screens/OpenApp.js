import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import ButtonApp from '../components/ButtonApp';

export default class OpenApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  _goToRegister = () => {
    this.props.navigation.navigate('Register')
  }
  render() {
    return (
      <View style={[ styles.fill ]}>
        <View style={[ styles.fill, styles.viewLogo ]}>
            <Image style={styles.image} source={require('../assets/images/LogoOpen.png')} />
        </View>
        <View style={styles.viewButton}>
            <ButtonApp title="Sign In" onPress={this._goToRegister} />
            <ButtonApp button2={true} title="Create Account" />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    fill: {
        flex: 1,
        backgroundColor: 'transparent'
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