import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { COLORS, FONTS } from '../constants';

const Login = ({ valueEmail, valuePassword, onChangeText, keyboardType }) => {
  return (
    <View style={styles.loginContainer}>
        <Text style={styles.title}>Login for access App with no Advertisement</Text>
        <View style={styles.containerInput}>
            <Text style={styles.text}>Email :</Text>
            <TextInput
                placeholder='Email'
                placeholderTextColor='gray'
                style={styles.textInput}
            />
            <Text style={styles.text}>Password :</Text>
            <TextInput
                placeholder='Password'
                placeholderTextColor='gray'
                style={styles.textInput}
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
    loginContainer: {
        //flex: 1,
        alignItems:'center',
        //backgroundColor: COLORS.white
    },
    containerInput: {
        width: '100%',
        padding: 20,
        //backgroundColor: COLORS.white
    },
    title: {
        color: COLORS.white,
        ...FONTS.body4,
        marginTop: 20,
        alignSelf: 'center'
    },
    text: {
        color: COLORS.white,
        ...FONTS.body4,
        //marginTop: 10
    },
    textInput: {
        color: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.white,
        width: '100%',
        marginVertical: 10,
        paddingLeft: 8
    },
    button: {
        height: 50,
        borderWidth: 1,
        borderColor: COLORS.blue,
        marginTop: 30,
        justifyContent: 'center'
    },
    buttonText: {
        alignSelf: 'center',
        color: COLORS.blue,
        ...FONTS.body4
    }
})