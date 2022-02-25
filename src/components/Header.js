import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS } from '../constants'


const Header = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        height: 50,
        width: '100%',
        backgroundColor: COLORS.primary,
        justifyContent: 'center'
    },
    text: {
        alignSelf: 'center',
        ...FONTS.body2,
        color: COLORS.blue
    }
})