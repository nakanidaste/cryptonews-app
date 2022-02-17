import React, { useRef, useCallback, useEffect } from 'react';
import { StyleSheet, View, Text, FlatList, Animated, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { getCoinMarket } from '../stores/market/marketAction';
import { COLORS, constants, FONTS, SIZES, icons } from '../constants';
import { HeaderBar, TabBar, Button } from '../components';
import { useFocusEffect } from '@react-navigation/native';
import { LineChart } from 'react-native-chart-kit';

const Market = ({ getCoinMarket, coins }) => {

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
    lineChart: {
        flex: 1,
        alignItems: 'center'
    },
    harga: {
        color: COLORS.white,
        ...FONTS.h4
    },
})