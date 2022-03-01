import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, FONTS } from '../constants';
import { Header, Login, SignUp } from '../components'

const Profile = () => {

    const [login, setLogin] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={styles.container}>
            <Header label="Profile"/>
            <ScrollView>
                {login ? <Login /> : <SignUp />}
                {login ? <Text style={styles.text}>Don't have an account? <Text style={{color: COLORS.blue}} onPress={() => setLogin(false)}>Sign Up here</Text></Text> :
                <Text style={styles.text}>Have an account? <Text style={{color: COLORS.blue}} onPress={() => setLogin(true)}>Login here</Text></Text> }
            </ScrollView>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray,
    },
    text: {
        color: COLORS.white,
        ...FONTS.body4,
        //marginTop: 20,
        alignSelf: 'center',
        marginBottom: 20
    }
})