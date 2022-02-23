import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { COLORS, FONTS } from '../constants'
import { useRoute } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/dist/AntDesign'

const DetailNews = () => {

    const route = useRoute()
    const {params: { title, url, source }} = route
    
    return (
        <View style={styles.container}>
            <View style={styles.detailContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>Source : <Icon name="link" size={10} color= {COLORS.blue}/> {source}</Text>
                <Text style={styles.preview}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
                <View style={styles.reaction}>
                    <View style={styles.bullish}>
                        <Text style={styles.textBullish}><Icon name="arrowup" size={18} color= {COLORS.lightGreen}/> Bullish</Text>
                    </View>
                    <View style={styles.bearish}>
                        <Text style={styles.textBearish}>Bearish <Icon name="arrowdown" size={18} color= {COLORS.red}/></Text>
                    </View>
                </View>
                <Text style={styles.jumlahComment}>0 Comment</Text>
                <View style={styles.commentContainer}>
                    <TextInput 
                        style={styles.textInput}
                        // placeholder="Type here"
                        // placeholderTextColor="#fff"
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default DetailNews

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray
    },
    detailContainer: {
        flex: 1,
        padding: 10,
        //backgroundColor: COLORS.blue
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        //justifyContent: 'space-between',
        height: '6%',
        marginTop: 5,
        //borderTopWidth: 1,
        //borderBottomWidth: 1,
        //borderColor: COLORS.lightGray
        //backgroundColor: COLORS.blue
    },
    title: {
        //height: 200,
        color: COLORS.white,
        marginTop: 10,
        //padding: 10,
        //alignSelf: 'center',
        ...FONTS.largeTitle,
        //backgroundColor: COLORS.blue
    },
    text: {
        color: COLORS.white,
        ...FONTS.body4,
        alignSelf: 'flex-end'
    },
    preview: {
        //height: '40%',
        color: COLORS.white,
        marginTop: 10,
        ...FONTS.body4,
        //backgroundColor: COLORS.blue
    },
    reaction: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '10%',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLORS.lightGray
        //backgroundColor: COLORS.blue
    },
    bullish: {
        borderWidth: 1,
        borderColor: COLORS.lightGreen,
        height: '55%',
        width: '30%',
        marginLeft: 30,
        opacity: 0.87
    },
    bearish: {
        borderWidth: 1,
        borderColor: COLORS.red,
        height: '55%',
        width: '30%',
        marginRight: 30,
        opacity: 0.87
    },
    textBullish: {
        alignSelf: 'center',
        marginTop: 4,
        color: COLORS.lightGreen,
        ...FONTS.body4
    },
    textBearish: {
        alignSelf: 'center',
        marginTop: 4,
        color: COLORS.red,
        ...FONTS.body4
    },
    jumlahComment: {
        marginTop: 20,
        color: COLORS.white,
        ...FONTS.body4,
    },
    textInput: {
        height: 35,
        width: '75%',
        //margin: 12,
        borderWidth: 1,
        borderColor: COLORS.white,
        opacity: 0.87
        //padding: 10,
    },
    button: {
        height: 35,
        width: '20%',
        marginLeft: 10,
        borderWidth: 1,
        borderColor: COLORS.blue,
        opacity: 0.87
    },
    textButton: {
        alignSelf: 'center',
        marginTop: 4,
        color: COLORS.blue,
        ...FONTS.body4
    },
    placeholder: {
        color: COLORS.blue,
        ...FONTS.body4
    }
})