
import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Button from '../components/Button'
import Header from '../components/Header';
import { Context as AuthContext } from '../context/AuthContext';



export default function AccountScreen() {
  const { signout } = useContext(AuthContext);


  return (

    <Background>

      <Image source={require('../../assets/signout.png')} style={styles.image} />


      <Header>See You Soon</Header>



      <Button
        mode="contained"
        onPress={() => { signout()}}
        style={{ marginTop: 24 }}
      >
        Sign Out
      </Button>

    </Background>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 8,
  },

});