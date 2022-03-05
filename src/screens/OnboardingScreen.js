import React, { useContext } from 'react'
import { StyleSheet, Image, TouchableOpacity, Text } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper'
import { COLORS } from '../constants'
import { AuthContext } from '../services/AuthProvider'

const Done = ({ ...props }) => (
  <TouchableOpacity style={{marginHorizontal: 8}} {...props}>
    <Text style={{fontSize: 16, color: COLORS.white, marginRight: 10}}>Done</Text>
  </TouchableOpacity>
)

const OnboardingScreen = ({ navigation }) => {

  const { anonymous } = useContext(AuthContext)

  return (
    <Onboarding
      DoneButtonComponent={Done}
      onSkip={() => {
        anonymous()
        navigation.replace("MainLayout")
      }}
      onDone={() => {
        anonymous()
        navigation.replace("MainLayout")
      }}
      pages={[
        {
          backgroundColor: COLORS.gray,
          image: <Image source={require('../assets/image/news.png')} style={{height: 250, width: 250}}/>,
          title: 'Daily News',
          subtitle: 'Get update with crypto news in daily basis',
        },
        {
          backgroundColor: COLORS.gray,
          image: <Image source={require('../assets/image/crypto_portfolio.png')} style={{height: 250, width: 250}} />,
          title: 'Live Crypto Market',
          subtitle: 'Get real time market data about your favorite coins',
        },
      ]}
    />
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({})