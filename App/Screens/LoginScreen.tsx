import { SafeAreaView, StyleSheet, Image, View,Text, Alert } from 'react-native'
import React, { useContext, useState } from 'react'
import { InputComponent } from '../Components/InputComponent'
import ButtonComponent from '../Components/ButtonsComponent'
import { AuthContext } from '../Services/AuthContext'

  const LoginScreen = () => {
  const { LogIn } = useContext(AuthContext);
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const handleLogin=async()=>{
    try {
      await LogIn(username, password);
      
    } catch (error) {
      Alert.alert('Login failed');
    }
  }
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.viewHeader}>
            <Image source={require('../../assets/login.png')}style={styles.imageHeader} />
        </View>
        <View style={styles.viewform}>
              <Text style={styles.headerForm}> Login  </Text>
        <View style={styles.groupInput}>
            <InputComponent nameIcon="user-alt" colorIcon='black' placeholder="Username"value={username} onChange={setUsername}/>
            <InputComponent nameIcon="key"colorIcon='black' placeholder="Password"value={password} onChange={setPassword}  secureTextEntry/>
        </View>
        <View>
          <ButtonComponent label="Đăng nhập" onPress={handleLogin} nameIcon="check" iconcolor="white"/>
        </View>
      
    </View>
    </SafeAreaView>
  )
}
export default LoginScreen


const styles = StyleSheet.create({
  container:{
    flex: 1, 
    justifyContent: 'center',
  },
  viewHeader:{
    alignItems: 'center',
    padding:10
  },
  imageHeader:{
    height:250,
    width:400,
    transform:[{rotate: '-5deg'}]
  },
  viewform:{
     justifyContent:'center',
     alignItems:'center'
  },
  headerForm:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 30,
  },
  groupInput:{

  },
})