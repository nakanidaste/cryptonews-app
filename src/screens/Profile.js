import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { COLORS, FONTS } from '../constants';
import { CoinList, Header } from '../components'
import Icon from 'react-native-vector-icons/dist/AntDesign'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Header label="Profile"/>
            <View style={styles.loginContainer}>
                <Text style={styles.text}>Sign In for access App with no Advertisement</Text>
                {/* <View style={styles.containerInput}> */}
                    <Text style={styles.text}>Email :</Text>
                    <TextInput
                        placeholder='Email'
                        style={styles.textInput}
                    />
                    <Text style={styles.text}>Password :</Text>
                    <TextInput
                        placeholder='Password'
                        style={styles.textInput}
                    />
                    <TouchableOpacity>
                        <Text>Login</Text>
                    </TouchableOpacity>
                {/* </View> */}
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray,
    },
    loginContainer: {
        flex: 1,
        alignItems:'center',
        //backgroundColor: COLORS.white
    },
    containerInput: {
        width: 100,
        backgroundColor: COLORS.white
    },
    text: {
        color: COLORS.white,
        ...FONTS.body4,
        marginTop: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: COLORS.white,
        width: '80%',
        marginTop: 10,
    }
})