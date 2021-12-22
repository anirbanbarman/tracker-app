import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { passwordValidator } from '../helpers/passwordValidator';
import { Context as AuthContext } from '../context/AuthContext';



export default function SignUpScreen({ navigation }) {
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      clearErrorMessage()
    });

    return unsubscribe;
  }, [navigation]);
  const {state,signup,clearErrorMessage}=useContext(AuthContext);
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


 

  return (
    <Background>
     
      <Logo Islogin={false} />
      <Header>Create Account</Header>
     
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email}
        onChangeText={(text) => setEmail(text)}
        
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password}
        onChangeText={(text) => setPassword(text)}
        
        secureTextEntry
      />

      {state.errorMessage?<Text style={styles.errorMessage}>{state.errorMessage.error}</Text>:null}
      <Button
        mode="contained"
        onPress={()=>{signup({email,password})}}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
          <Text style={styles.link}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  errorMessage:{
    fontSize:16,
    color:"red",
    marginLeft:15,
    marginTop:15
  }
})