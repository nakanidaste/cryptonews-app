import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { constants, SIZES, COLORS, FONTS } from '../constants'

const marketTabs = constants.marketTabs.map((marketTab) => ({
    ...marketTab,
    ref: React.createRef()
}))

const Tabs = () => {
    return (
        <View style={styles.containerTab}>
            {marketTabs.map(( item, index ) => {
                return (
                    <TouchableOpacity 
                        key={`MarketTab-${index}`}
                        style={{flex: 1}}>
                        <View ref={item.ref} style={styles.switch}>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    </TouchableOpacity>
                )
            })} 
        </View>
    )
}

function TabBar() {
  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.radius,
        marginHorizontal: SIZES.radius,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.gray
    },
    containerTab: {
        flexDirection: 'row'
    },
    switch: {
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        height: 40
    },
    title: {
        color: COLORS.white,
        ...FONTS.h3
    }
})