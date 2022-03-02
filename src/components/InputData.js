import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { COLORS, FONTS } from '../constants';

const InputData = ({ placeholder, keyboardType, autoCapitalize, secureTextEntry, onChangeText, label, style, gaya }) => {
  return (
    <View style={styles.container}>
      <Text style={gaya}>{label}</Text>
      <TextInput 
        placeholder={placeholder}
        placeholderTextColor='gray'
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        style={style}
      />
    </View>
  )
}

export default InputData

const styles = StyleSheet.create({
    container: {
        //width: '100%',
        flex: 1,
        padding: 20,
        alignItems: 'center'
    },
    text: {
        alignSelf: 'flex-start',
        color: COLORS.white,
        ...FONTS.body4,
    },
    textInput: {
        color: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.white,
        width: '100%',
        marginVertical: 10,
        paddingLeft: 8,
        //backgroundColor: 'blue'
    }
})