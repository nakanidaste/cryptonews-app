import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, RefreshControl } from 'react-native';
import { CoinList } from '../components';
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
        setLoading(true)
        const coinsData = await getMarketData()
        setCoins(coinsData)
        setLoading(false)
    }

    useEffect(() => {
        fetchCoins()
    }, [])

    return (
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
        />
    )
}

export default Market

const styles = StyleSheet.create({
    
})