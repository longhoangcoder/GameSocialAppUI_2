import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'

export default function LoginScreen({ navigation }) {
  return (
      <SafeAreaView style = {styles.container}>
          <Text>Login</Text>
      </SafeAreaView>
  )
}