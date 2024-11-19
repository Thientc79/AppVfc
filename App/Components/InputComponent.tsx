import { TextInput, View,StyleSheet } from "react-native"
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


interface Props{
  colorIcon?:string,
  nameIcon?:string,
    value:string,
    onChange: (val: string) => void,
    placeholder?: string,
    secureTextEntry? : boolean
  }
  export const InputComponent = (props: Props) => {
    const {nameIcon,colorIcon,onChange,placeholder,value,secureTextEntry=false}=props
  
    return (
      <View style={styles.inputContainer}>
        <FontAwesome5 name={nameIcon} size={20} color={colorIcon} style={styles.icon} />
         <TextInput placeholder={placeholder ?? ''}  style={styles.input}  onChangeText={val => onChange(val)} secureTextEntry={secureTextEntry}/>      
      </View>
    )
  }
  const styles=StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      marginBottom: 25,
      paddingBottom: 8,
      borderBottomColor:'#AD40AF',
      width:250,
     
    },
    icon: {
      marginRight: 10, // Khoảng cách giữa icon và TextInput
    },
    input: {
      flex: 1,
      //height: 40,
      fontSize: 18,
      
    },
     
  })