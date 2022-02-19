import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS } from '../constants'

const NewsList = ({ cryptoNews }) => {

    //const { judul, link } = cryptoNews

    return (
        <View style={styles.container}>
            <View style={styles.newsCointainer}>
                <View style={styles.time}>
                    <Text style={styles.title}>1 min</Text>
                </View>
                <View style={styles.news}>
                    <Text style={styles.title}>Judul</Text>
                    <Text style={styles.title}>Link</Text>
                </View>
            </View>
        </View>
    )
}

export default NewsList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: COLORS.gray
    },
    newsCointainer: {
        flexDirection: 'row',
        borderBottomWidth: 0.3,
        borderBottomColor: COLORS.lightGray,
        paddingVertical: 10,
    },
    time: {
        height: '80%',
        width: '15%',
        marginVertical: 5,
        alignItems: 'center',
        padding: 7,
    },
    news: {
        flex: 1,
        flexDirection: 'column',
        padding: 5,
        alignItems: 'flex-start',
        //backgroundColor: 'blue'
    },
    title: {
        color: COLORS.white,
        ...FONTS.body4
    }
})