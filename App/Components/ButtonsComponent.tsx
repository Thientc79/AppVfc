import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



interface Props{ 
  label:string,
  onPress:()=>void,
  nameIcon:any,
iconcolor:string
}
const ButtonComponent = (props:Props) => {
    const {label,onPress,nameIcon,iconcolor}=props
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
           <Text style={styles.btnText}>{label}</Text>
           <MaterialIcons name={nameIcon} size={24} color={iconcolor} />
           
       </TouchableOpacity>
    
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#AD40AF',
            padding: 12,
            width: 300,
            borderRadius: 10,
            marginBottom: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
      },
      btnText:{
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        
      }
  
})