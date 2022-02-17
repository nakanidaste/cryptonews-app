import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, constants, FONTS, SIZES, icons } from '../constants';

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.coinContainer}>
                <Image 
                    source={{uri: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'}} 
                    style={styles.image}
                />
                <View>
                    <Text style={styles.title}>Bitcoin</Text>
                    <View style={styles.figures}>
                        <Text style={styles.text}>1</Text>
                        <Text style={styles.text}>BTC</Text>
                        <Text style={styles.text}>0,63%</Text>
                    </View>
                </View>
                <View style={{marginLeft: 'auto'}}>
                    <Text style={styles.title}>56265.00</Text>
                    <Text style={styles.text}>MCap 1.076 T</Text>
                </View>
            </View>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 5,
        backgroundColor: COLORS.black
    },
    coinContainer: {
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderBottomColor: COLORS.white,
        padding: 10,
        //backgroundColor: COLORS.red
    },
    image: {
        height: 35,
        width: 35,
        marginRight: 10,
        marginTop: 5,
        marginLeft: 10, 
        alignItems: 'center'
    },
    title: {
        //marginLeft: SIZES.radius,
        color: COLORS.white,
        ...FONTS.h3
    },
    text: {
        color: COLORS.white,
        marginRight: 5,
        ...FONTS.body4
    },
    figures: {
        flexDirection: 'row',
        //backgroundColor: COLORS.red
    },
})