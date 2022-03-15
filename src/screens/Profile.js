import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { COLORS, FONTS } from '../constants';
import { Header } from '../components'
import { firebase } from '@react-native-firebase/auth'

const Profile = ({ navigation }) => {

    if (!firebase.auth().currentUser.isAnonymous) {
        return (
            <View style={styles.container2}>
                <Header label="Profile"/>
                <View style={styles.container}>
                    <View style={styles.content2}>
                        <Text style={styles.text1}>You are logged in authorized,</Text>
                        <Text style={styles.text}>you can send criticism and suggestions for</Text>
                        <Text style={styles.text1}>application development here.</Text>
                        <TouchableOpacity style={styles.buttonLogout} onPress={() => Linking.openURL(`mailto:samuelys945@gmail.com?subject=Feedback Application Development`)}>
                            <Text style={styles.buttonText}>Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    } 
        return (
            <View style={styles.container2}>
                <Header label="Profile"/>
                <View style={styles.container}>
                    <View style={styles.content}>
                        <Text style={styles.text1}>You are logged in anonymously,</Text>
                        <Text style={styles.text}>to to send criticism and suggestions for application</Text>  
                        <Text style={styles.text}>development please authorize first.</Text>
                        <View style={styles.btnContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                                <Text style={styles.buttonText}>Login</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignUp')}>
                                <Text style={styles.buttonText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>  
                </View>
            </View>
        )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        flex: 1,
        backgroundColor: COLORS.gray,
    },
    content: {
        height: '55%',
        borderWidth: 1,
        borderColor: COLORS.white,
        backgroundColor: "#020202",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 70
    },
    content2: {
        height: '45%',
        width: '80%',
        borderWidth: 1,
        borderColor: COLORS.white,
        backgroundColor: "#020202",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    text: {
        color: COLORS.white,
        ...FONTS.body4,
    },
    text1: {
        color: COLORS.white,
        ...FONTS.body4,
    },
    btnContainer: {
        flexDirection: 'row',
        marginTop: 20,
        padding: 10,
        justifyContent: 'center',
    },
    button: {
        height: 50,
        width: '40%',
        borderWidth: 1,
        borderColor: COLORS.blue,
        marginHorizontal: 10,
        justifyContent: 'center',
    },
    buttonLogout: {
        height: 40,
        width: '30%',
        borderWidth: 1,
        borderColor: COLORS.blue,
        marginTop: 15,
        justifyContent: 'center',
    },
    buttonText: {
        alignSelf: 'center',
        color: COLORS.blue,
        ...FONTS.body4
    },
})