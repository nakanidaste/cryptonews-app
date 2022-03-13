import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { COLORS, FONTS } from '../constants'
import Icon from 'react-native-vector-icons/dist/AntDesign'


const Header = ({ label, home, onPress }) => {
  if (home) {
    return (
      <View style={styles.container2}>
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{label}</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Icon name="question" size={22} color= {COLORS.blue} style={styles.icon}/>
        </TouchableOpacity>
      </View>  
    )
  }
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    container2: {
        height: 50,
        width: '100%',
        flexDirection: 'row',
        backgroundColor: COLORS.primary,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textWrapper: {
      //backgroundColor: COLORS.white,
      marginLeft: "35%"
    },
    text: {
        marginTop: 5,
        ...FONTS.body2,
        color: COLORS.blue
    },
    button: {
        backgroundColor: COLORS.black,
        borderRadius: 10,
        marginRight: 10
    },
    icon: {
  
    }
})