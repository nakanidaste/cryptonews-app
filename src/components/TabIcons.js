import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { FONTS, COLORS } from '../constants'

const TabIcons = ({ focused, icon, iconStyle, label }) => {
  return (
    <View style={styles.container}>
        <Image source={icon} resizeMode="contain" style={styles.icon(focused, iconStyle)}/>
        <Text style={styles.label(focused)}>{label}</Text>
    </View>
  )
}

export default TabIcons

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon: (focused, iconStyle) => ({
        width: 25,
        height: 25,
        tintColor: focused ? COLORS.white : COLORS.secondary,
        ...iconStyle 
    }),
    label: (focused) => ({
        color: focused ? COLORS.white : COLORS.secondary,
        ...FONTS.h4
    })
})