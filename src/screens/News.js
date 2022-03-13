import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator, Modal, Image, Text, TouchableOpacity, Animated } from 'react-native';
import { COLORS, FONTS } from '../constants'
import { NewsList, Header } from '../components';
import { BannerAd, BannerAdSize } from '@react-native-firebase/admob'
import { firebase } from '@react-native-firebase/auth'
import axios from "axios";
import Config from 'react-native-config';

const ModalPoup = ({ visible, children }) => {
    const [showModal, setShowModal] = useState(visible)
    const scaleValue = useRef(new Animated.Value(0)).current
    useEffect(() => {
        toggleModal()
    }, [visible])
    const toggleModal = () => {
        if(visible) {
            setShowModal(true)
            Animated.spring(scaleValue,{
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }).start()
        } else {
            setTimeout(() => setShowModal(false), 200)
            Animated.timing(scaleValue,{
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start()
        }
    }
    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackground}>
                <Animated.View style={[styles.containerModal, {transform: [{scale: scaleValue}]}]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    )
}

const News = ({ navigation }) => {

    const [news, setNews] = useState([])
    const [loading, setLoading] = useState(true)
    const [visible, setVisible] = useState(false)

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
                home={true}
                onPress={() => setVisible(true)}
            />
            <ModalPoup visible={visible}>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Image source={require("../assets/icons/close.png")} style={{height: 15, width: 15, tintColor: COLORS.white}}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={{marginVertical: 15, ...FONTS.body4, textAlign: 'center', color: COLORS.white}}>About</Text>
            </ModalPoup>
            <BannerAd 
                size={BannerAdSize.SMART_BANNER} 
                unitId={"ca-app-pub-3836030351211700/1666925991"}
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
    modalBackground: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerModal: {
        width: "80%",
        backgroundColor: COLORS.gray,
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20
    },
    header: {
        width: '100%',
        height: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
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