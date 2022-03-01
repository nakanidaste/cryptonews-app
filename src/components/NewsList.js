import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native'
import { COLORS, FONTS } from '../constants'
import Icon from 'react-native-vector-icons/dist/AntDesign'

const NewsList = ({ cryptoNews, navigation }) => {

    const { title, url, source } = cryptoNews

    return (
        <TouchableOpacity 
            style={styles.container} 
            //onPress={() => navigation.navigate('DetailNews', {title, url, source})}
            onPress={() => Linking.openURL(url)}
        >
            <View style={styles.newsCointainer}>
                <View style={styles.news}>
                    <Text style={styles.title}>{title}  <Icon name="link" size={10} color= {COLORS.blue}/> <Text style={styles.source}>{source}</Text> </Text>            
                </View>
                <View style={styles.time}>
                    <Icon name="arrowup" size={10} color= {COLORS.blue} style={styles.icon}/>
                    <Icon name="arrowdown" size={10} color= {COLORS.blue} style={styles.icon}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default NewsList

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: COLORS.gray,
        borderBottomWidth: 0.6,
        borderBottomColor: COLORS.lightGray,
    },
    newsCointainer: {
        flexDirection: 'row',
        // borderBottomWidth: 0.3,
        // borderBottomColor: COLORS.lightGray,
        paddingVertical: 10,
        //backgroundColor: 'red'
        
    },
    time: {
        flexDirection: 'column',
        height: '80%',
        width: '12%',
        marginVertical: 5,
        alignItems: 'center',
        //padding: 7,
        //backgroundColor: 'blue'
    },
    news: {
        flex: 1,
        //flexDirection: 'row',
        padding: 5,
        alignItems: 'flex-start',
        marginLeft: 15,
        //backgroundColor: 'blue'
    },
    title: {
        color: COLORS.white,
        ...FONTS.body4
    },
    source: {
        color: COLORS.blue,
        marginLeft: 20,
        ...FONTS.body5
    },
    icon: {
        marginVertical: 5,
        opacity: 0.8,
        paddingLeft: 15
    }
})