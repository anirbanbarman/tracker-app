

import { useIsFocused } from '@react-navigation/native';
import React, { useCallback, useContext, useEffect } from 'react';
import {  StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
// import '../_mockLocation';

 import Map from '../components/Map';
import TrackForm from '../components/TrackForm';
 import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';

export default function TrackCreateScreen({navigation}) {

  const isFocused = useIsFocused();

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('blur', () => {
  //    console.log("gfgfgf")
  //   });

  //   return unsubscribe;
  // }, [navigation]);
  const {state,addLocation}=useContext(LocationContext);

  const callback=useCallback((location)=>{
    addLocation(location,state.recording);
  },[state.recording]);
  const [errorMsg]=useLocation(isFocused || state.recording,callback);
 

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Header >Create a track</Header>
        <Map />
        {errorMsg ? <Text>Please enable location Services</Text> : null}
        <TrackForm/>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});