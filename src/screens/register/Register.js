import React, { Component } from 'react';
import { View, Text, StyleSheet, } from 'react-native';
import Header from '../../components/Header';
import { ScrollView } from 'react-native-gesture-handler';
import { colors, sizeText, fonts } from '../../common/Custom';
import InputTextApp from '../../components/InputTextApp';
import ButtonApp from '../../components/ButtonApp';

export default class Register extends Component {
   constructor(props) {
      super(props);
      this.state = {
         username: '',
         email: '',
         phone: '',
         password: '',
         confirmPassword: ''
      };
   }

   render() {
      return (
         <View style={styles.fill}>
            <Header back={true} title={"Create Account"} navigation={this.props.navigation} />
            <ScrollView style={styles.scrollView}>
               <Text style={styles.textTitle}><Text style={styles.textHello}>Hello!</Text> Create your account and enjoy</Text>
               <InputTextApp 
                  value={this.state.username} 
                  placeholder={"Username"} 
                  onChangeText={(username) => this.setState({username})}
               />
               <InputTextApp 
                  value={this.state.username} 
                  placeholder={"Email"} 
                  onChangeText={(email) => this.setState({email})}
               />
               <InputTextApp 
                  value={this.state.username} 
                  placeholder={"Phone"} 
                  onChangeText={(phone) => this.setState({phone})}
               />
               <InputTextApp 
                  value={this.state.username} 
                  placeholder={"Password"} 
                  onChangeText={(password) => this.setState({password})}
               />
               <InputTextApp 
                  value={this.state.username} 
                  placeholder={"Confirm Password"} 
                  onChangeText={(confirmPassword) => this.setState({confirmPassword})}
               />
               <ButtonApp title="Create Account" />
            </ScrollView>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   fill: {
      flex: 1,
   },
   scrollView: {
   },
   textTitle: {
      color: colors.text2,
      fontSize: 20,
      fontFamily: fonts.Bahij_TheSansArabic,
      padding: 30,
      width: '80%',
   },
   textHello: {
      color: colors.button1,
      fontSize: 20,
      fontFamily: fonts.Bahij_TheSansArabic,
   }
})