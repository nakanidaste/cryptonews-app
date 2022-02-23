import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, RefreshControl, View, ActivityIndicator } from 'react-native';
import { CoinList } from '../components';
import { COLORS, SIZES } from '../constants';
import { getMarketData } from '../services/requests'

const Market = () => {

    const [coins, setCoins] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchCoins = async () => {
        if (loading) {
            return;
        }
        setLoading(true)
        const coinsData = await getMarketData()
        setCoins(coinsData)
        setLoading(false)
    }

    const refecthCoins = async () => {
        if (loading) {
            return;
        }
        //setLoading(true)
        const coinsData = await getMarketData()
        setCoins(coinsData)
        //setLoading(false)
    }

    useEffect(() => {
        fetchCoins()
    }, [])

    return (
        <View style={styles.container}>
            {loading ? <ActivityIndicator size="large" color={COLORS.blue} style={styles.loading}/> :
            <FlatList 
                data={coins}
                renderItem={({item}) => <CoinList marketCoin={item}/>}
                refreshControl= {
                    <RefreshControl 
                        refreshing={loading}
                        tintColor= "white"
                        onRefresh={refecthCoins}
                    />
                }
            /> }
        </View>
    )
}

export default Market

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black
    },
    containerButton: {
        flexDirection: 'row',
        margin: SIZES.radius,
        paddingVertical: 5,
        justifyContent: 'space-around',
        backgroundColor: COLORS.lightGray2
    },
    loading: {
        flex: 1,
        alignSelf: 'center',
    },
})