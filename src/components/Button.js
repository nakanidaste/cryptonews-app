import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { SIZES, COLORS, FONTS } from '../constants'

const TextButton = ({ label, containerStyle, onPress }) => {
  return (
    <TouchableOpacity 
        style={styles.container2(containerStyle)}
        onPress={onPress}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  )
}

function Button() {
  return (
    <View style={styles.container1}>
        <TextButton label="USD"/>
        <TextButton 
            label="% (7D)" 
            containerStyle={{
                marginLeft: SIZES.base
            }}
        />
        <TextButton 
            label="Top"
            containerStyle={{
                marginLeft: SIZES.base
            }}
        />
    </View>
  )
}

export default Button

const styles = StyleSheet.create({
    container1: {
        flexDirection: 'row',
        marginTop: SIZES.radius,
        marginHorizontal: SIZES.radius,
    },
    container2: (containerStyle) => ({
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
        paddingHorizontal: 18,
        borderRadius: 15,
        backgroundColor: COLORS.gray1,
        ...containerStyle
    }),
    label: {
        color: COLORS.white,
        ...FONTS.h3
    }
})