import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors, fonts, sizeText } from '../common/Custom';
// import propTypes from 'Prop-Types';
export default class Button extends Component {
    _onPress = () => {
        const { call_back } = this.props;
        if(call_back){
            call_back()
        }else{
            alert("OnPress Button")
        }
    }
    render() {
        const { title, button2, call_back } = this.props;
        return (
            <View style={[styles.viewButton, button2 && styles.backgroundColor ]}>
                <TouchableOpacity
                    onPress={this._onPress}
                >
                    <Text style={styles.text}> {title || "Button"} </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    viewButton: {
        height: 40,
        marginHorizontal: 20,
        marginVertical: 10,
        backgroundColor: colors.button1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    backgroundColor: {
        backgroundColor: colors.button2,
    },
    text: {
        fontFamily: fonts.Bahij_TheSansArabic_SemiBold,
        color: colors.text1,
        fontSize: sizeText.textButton,
    }
})