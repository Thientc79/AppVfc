import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Alert } from "react-native";

export interface User{
    id:string,
    name:string,
    username:string,
    password:string,
    email:string,
    role:string,
    region:string
 }
 interface AuthenConTextType{
    tokenLogin:string|null,
    usersLogin:User[],
    
     loading:boolean;
    LogIn:(username:string,password:string)=>Promise<void>;
     Regis:(username:string,password:string,name:string,email:string,role:string,region:string)=>Promise<void>;
     LogOut:() => Promise<void>;
     
 }
 type Props = { children: React.ReactNode };
export const AuthContext = createContext<AuthenConTextType>({
    usersLogin:[],
    tokenLogin:null,
   
    loading: true,
    LogIn: async () => {},
    Regis: async () => {},
    LogOut: async () => {},
}) 

export const AuthProvider=({children}:Props)=>{
  const[tokenLogin,setTokenLogin]=useState<string|null>(null)
  const[usersLogin,setUsersLogin]=useState<User[]>([])
   const [loading, setLoading] = useState(true)
useEffect(()=>{
    const checkLogin=async()=>{
        setLoading(true);
        try {
          const token = await AsyncStorage.getItem('@token');
          console.log(token)
          if (token) {setTokenLogin(token);

        const users = await AsyncStorage.getItem('@UsersLogin');
       
        if (users) {setUsersLogin(JSON.parse(users));}
          }
        } catch (error) {
          console.error('Failed to load user data:', error);
        } finally {
          setLoading(false);
        }
      };
      checkLogin()
},[])

const LogIn=async(username:string,password:string)=>{
    
      if(username=="" || password==""){Alert.alert("Thông Báo","Vui lòng nhập đầy đủ thông tin")}
      else{
        try{
            const response = await fetch('http://api.nino.com.vn/api/Authen/Login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
              });
              if (!response.ok) {
                Alert.alert('Thông Báo', 'Thông tin đăng nhập không đúng');
                return;
              }
              
              const data = await response.json();
              console.log(data)
              const { token, login } = data.result;
              await AsyncStorage.setItem('@token', token);
              await AsyncStorage.setItem('@UsersLogin', JSON.stringify([login]));
          
              // Cập nhật trạng thái
              setTokenLogin(token);
              setUsersLogin([login]);
          
              Alert.alert('Thông Báo', 'Đăng nhập thành công');
        }catch (error) {
            console.error('Error:', error);
            Alert.alert('Thông Báo', 'Có lỗi xảy ra khi đăng nhập');
          }
      }
     
  }

const Regis=async(username:string,password:string,name:string,email:string,role:string,region:string)=>{

}
const LogOut=async()=>{
  setTokenLogin(null)
  setUsersLogin([])
  await AsyncStorage.removeItem('@token')
  await AsyncStorage.removeItem('@UsersLogin')
}
return(
    <AuthContext.Provider value={{usersLogin,tokenLogin,loading,LogIn,LogOut,Regis }}>
             {children}
    </AuthContext.Provider>
)
}