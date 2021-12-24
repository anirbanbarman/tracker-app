 
import React, { useState,useContext } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Button from './Button'
import TextInput from './TextInput';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';



export default function TrackForm() {
  const {state:{name,recording,locations},startRecording, stopRecording, changeName }=useContext(LocationContext);
const [saveTrack]= useSaveTrack();

  //  const [trackName,setTrackName]= useState("")
  console.log(locations.length)
  return (
      
    <View style={{marginHorizontal:10}}>

<TextInput
        label="Track Name"
        returnKeyType="next"
        value={name}
        onChangeText={(text) => changeName(text)}
    
      />
      {recording?<Button
        mode="contained"
        onPress={() => { stopRecording()}}
        style={{ marginTop: 24 }}
      >
       Stop 
      </Button>:<Button
        mode="contained"
        onPress={() => { startRecording()}}
        style={{ marginTop: 24 }}
      >
       Start Recording
      </Button>}

      {!recording && locations.length ?(<Button
        mode="contained"
        onPress={() => { saveTrack()}}
        style={{ marginTop: 24 }}
      >
       Save Recording
      </Button>):null}
      
   </View>
  );
}

const styles = StyleSheet.create({ 
  
});