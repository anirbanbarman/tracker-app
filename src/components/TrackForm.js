 
import React, { useState } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Button from './Button'
import TextInput from './TextInput';


export default function TrackForm() {

   const [trackName,setTrackName]= useState("")
  return (
      
    <View style={{marginHorizontal:10}}>

<TextInput
        label="Track Name"
        returnKeyType="next"
        value={trackName}
        onChangeText={(text) => setTrackName(text)}
    
      />
       <Button
        mode="contained"
        onPress={() => { signout()}}
        style={{ marginTop: 24 }}
      >
       Start Recording
      </Button>
   </View>
  );
}

const styles = StyleSheet.create({ 
  
});