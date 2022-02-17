import React, { useRef } from 'react'
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { COLORS, SIZES, FONTS, constants } from '../constants'

const marketTabs = constants.marketTabs.map((marketTab) => ({
    ...marketTab,
    ref: React.createRef()
}))

const Isi = ({item, index}) => {
    return (
        <View style={styles.container1}>
            <FlatList 
                data={coins}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => {

                    let priceColor = (item.price_change_percentage_7d_in_currency == 0 ? COLORS.lightGray : (item.price_change_percentage_7d_in_currency > 0) ? COLORS.lightGreen : COLORS.red)

                    return (
                        <View style={styles.container2}>
                            <View style={styles.container3}>
                                <Image source={{uri: item.image}} style={styles.image}/>
                                <Text style={styles.label}>{item.name}</Text>
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    )
}

function MarketList({ item }) {

    const scrollX = useRef(new Animated.Value(0)).current

    return (
        <Animated.FlatList
            data={marketTabs}
            contentContainerStyle={{
                marginTop: SIZES.padding
            }}
            horizontal
            pagingEnabled
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
            onScroll={
                Animated.event([
                    {nativeEvent: {contentOffset: {x: scrollX}}}
                ], {
                    useNativeDriver: false
                })
            }
            // renderItem={({item, index}) => {
            //     <Isi item={item} index={index}/>
            // }}
            renderItem={item}
        />
    )
    }

export default MarketList

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        width: SIZES.width
    },
    container2: {
        flexDirection: 'row',
        paddingHorizontal: SIZES.padding,
        marginBottom: SIZES.radius
    },
    container3: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 20,
        width: 20
    },
    label: {
        marginLeft: SIZES.radius,
        color: COLORS.white,
        ...FONTS.h3
    }
})