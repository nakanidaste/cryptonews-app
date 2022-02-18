import React, { memo } from 'react'
import { StyleSheet, Text, Pressable } from 'react-native'
import { SIZES, COLORS, FONTS } from '../constants'

const Button = (props) => {

    const { buttonHours, buttonText, selectedTime, setSelectedTime } = props
    const isButtonSelected = (button) => button === selectedTime

    return (
        <Pressable 
            style={{
                paddingHorizontal: 5,
                paddingVertical: 3,
                borderRadius: 5,
                backgroundColor: isButtonSelected(buttonHours) ? "#1e1e1e" : "transparent"
            }}
            onPress={() => setSelectedTime(buttonHours)}
        >
            <Text style={{ color: isButtonSelected(buttonHours) ? "white" : "grey"}}>{buttonText}</Text>
        </Pressable>
    )
}

export default memo(Button)

const styles = StyleSheet.create({

})