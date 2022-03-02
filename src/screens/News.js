import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';
import { COLORS, FONTS } from '../constants'
import { NewsList, Header } from '../components';
import { BannerAd, BannerAdSize, TestIds } from '@react-native-firebase/admob'
import axios from "axios";
import Config from 'react-native-config';

const News = ({ navigation }) => {

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://crypto-news-live3.p.rapidapi.com/news',
            headers: {
                'x-rapidapi-host': Config.REACT_APP_RAPID_API_URL,
                'x-rapidapi-key': Config.REACT_APP_RAPID_API_KEY
            }
        }

        axios.request(options).then((response) => {

            setNews(response.data)
            setLoading(false)

        }).catch((error) => {
            console.error(error)
        })

    }, [])

    return (
        <View style={styles.container}>
            <Header
                label="CryptoNews"
            />
            <BannerAd 
                size={BannerAdSize.SMART_BANNER} 
                unitId={"ca-app-pub-3940256099942544/6300978111"}
                requestOptions={{
                    requestNonPersonalizedAdsOnly: true
                }}
                onAdLoaded={() => {
                    console.log('Advert Loaded')
                }}
                onAdFailedToLoad={(e) => {
                    console.error('Advert failed to load: ',e)
                }}
            />
            {loading ? <ActivityIndicator size="large" color={COLORS.blue} style={styles.loading}/> :
            <FlatList
                data={news}
                renderItem={({item}) => <NewsList cryptoNews={item} navigation={navigation}/>}
            /> }
        </View>
    ) 
}

export default News;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.gray
    },
    loading: {
        flex: 1,
        alignSelf: 'center',
    },
    text: {
        color: COLORS.white,
        ...FONTS.body4
    }
})