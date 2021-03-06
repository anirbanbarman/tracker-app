 
import React, { useContext } from 'react';
import { ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import MapView, { Circle, Polyline } from 'react-native-maps';
import { Context as LocationContext } from '../context/LocationContext';



export default function Map() {
  const {state:{currentLocation,locations}}=useContext(LocationContext);

  if(!currentLocation){
    return <ActivityIndicator size="large" style={{marginTop:200}}/>
  }


    
  return (

      
    <View >
      <MapView style={styles.map} initialRegion={{
    ...currentLocation.coords,
      latitudeDelta: 0.01,
      longitudeDelta: 0.1,
    }}
    region={{
      ...currentLocation.coords,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,

    }}>

      <Circle
      center={currentLocation.coords}
      radius={10}
      strokeColor="rgba(158,158,255,1.0)"
      fillColor="rgba(158,158,255,3)"
      />

      <Polyline coordinates={locations.map((loc)=>loc.coords)}/>
      </MapView>


   </View>
  );
}

const styles = StyleSheet.create({ 
    map:{
        height:250

    }
  
});