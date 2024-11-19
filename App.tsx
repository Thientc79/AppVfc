import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AuthContext, AuthProvider } from './App/Services/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './App/Screens/HomeScreen';
import LoginScreen from './App/Screens/LoginScreen';
import { useContext } from 'react';



const MainNavigator = () => {
  const { usersLogin, tokenLogin, loading } = useContext(AuthContext);
  const Stack=createNativeStackNavigator()
 
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
    <SafeAreaView style={{flex:1}}>
    <NavigationContainer>
      {tokenLogin && usersLogin.length > 0 ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="home" component={HomeScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
    </SafeAreaView>

    </KeyboardAvoidingView>
  );
};
export default function App() {
  return (
   
   
    <AuthProvider>
      <MainNavigator/>
    </AuthProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
