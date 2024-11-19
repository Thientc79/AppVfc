import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Services/AuthContext'

const HomeScreen = () => {
  const {LogOut}=useContext(AuthContext)
  return (
    <View style={{flex:1}}>
      <Text style={{fontSize:50,}}>HomeScreen</Text>
      <TouchableOpacity onPress={LogOut}>
        <Text>LogOUT</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})