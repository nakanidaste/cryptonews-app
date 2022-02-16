import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, FlatList, Animated, Image } from 'react-native';
import { connect } from 'react-redux';
import { getCoinMarket } from '../stores/market/marketAction';
import { COLORS, constants, FONTS, SIZES, icons } from '../constants';
import { HeaderBar, TabBar, Button } from '../components';

const Market = ({ getCoinMarket, coins }) => {

    useEffect(() => {
        getCoinMarket()
    }, [])

    return (
        <View style={styles.container}>
            <HeaderBar title="Market"/>
            <TabBar />
            <Button />
        </View>
    )
}

function mapStateToProps(state) {
    return {
        coins: state.marketReducer.coins
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getCoinMarket: (currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page) => {
            return dispatch(getCoinMarket(currency, coinList, orderBy, sparkline, priceChangePerc, perPage, page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Market)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.black
    },
})