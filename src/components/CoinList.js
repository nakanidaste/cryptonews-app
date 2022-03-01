import React from 'react';
import Icon from 'react-native-vector-icons/dist/AntDesign'
import { View, Text, StyleSheet, Image } from 'react-native';
import { COLORS, FONTS } from '../constants';

const CoinList = ({ marketCoin }) => {
  
  const { 
    name, 
    current_price, 
    market_cap_rank, 
    price_change_percentage_24h, 
    symbol, 
    market_cap,
    image,
  } = marketCoin

  const percantageColor = price_change_percentage_24h < 0 ? COLORS.red : COLORS.lightGreen
  
  const normalizeMarketCap = (marketCap) => {
    if (marketCap > 1e12) {
      return `${(marketCap / 1e12).toFixed(3)} T`
    } if (marketCap > 1e9) {
      return `${(marketCap / 1e9).toFixed(3)} B`
    } if (marketCap > 1e6) {
      return `${(marketCap / 1e6).toFixed(3)} M`
    } if (marketCap > 1e3) {
      return `${(marketCap / 1e3).toFixed(3)} K`
    }
    return marketCap
  }

  return (
    <View style={styles.container}>
      <View style={styles.coinContainer}>
        <Image 
          source={{ uri: image}} 
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.figures}>
            <View style={styles.rankContainer}>
              <Text style={styles.rank}>{market_cap_rank}</Text>
            </View>
            <Text style={styles.text}>{symbol.toUpperCase()}</Text>
            <Icon 
              name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'} 
              size={14} 
              color={percantageColor}
              style={styles.icon}
            />
            <Text style={{color: percantageColor}}>{price_change_percentage_24h.toFixed(2)} %</Text>
          </View>
        </View>
        <View style={{marginLeft: 'auto', alignItems: 'flex-end'}}>
          <Text style={styles.title}>$ {current_price}</Text>
          <Text style={styles.MCap}>MCap {normalizeMarketCap(market_cap)}</Text>
        </View>
      </View>
    </View>
  )
}

export default CoinList

const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 5,
        backgroundColor: COLORS.gray
    },
    coinContainer: {
        flexDirection: 'row',
        borderBottomWidth: 0.6,
        borderBottomColor: COLORS.lightGray,
        padding: 10,
    },
    image: {
        height: 35,
        width: 35,
        marginRight: 10,
        marginTop: 7,
        marginLeft: 5, 
        alignItems: 'center'
    },
    title: {
        color: COLORS.white,
        opacity: 0.87,
        ...FONTS.h3,
        fontWeight: 'bold',
        marginBottom: 5
    },
    text: {
        color: COLORS.white,
        marginRight: 5,
        ...FONTS.body4,
    },
    MCap: {
      color: COLORS.white,
      ...FONTS.body4
    },
    rankContainer: {
        backgroundColor: "#585858",
        paddingHorizontal: 5,
        borderRadius: 5,
        marginRight: 5
    },
    rank: {
        fontWeight: 'bold',
        color: COLORS.white,
    },
    icon: {
        alignSelf: 'center',
        marginRight: 5
    },
    figures: {
        flexDirection: 'row',
    },
})