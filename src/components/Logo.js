import React from 'react'
import { Image, StyleSheet } from 'react-native'

export default function Logo({Islogin}) {

  
  return(Islogin? <Image source={require('../../assets/bike.png')} style={styles.image} />:<Image source={require('../../assets/signup.png')} style={styles.image}/>) 
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 8,
  },
})
