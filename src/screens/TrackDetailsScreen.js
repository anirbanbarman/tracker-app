 
import React, { useContext } from 'react';
import { StyleSheet, Text, View} from 'react-native';
import MapView, { Polyline } from 'react-native-maps';
import { Context as TrackContext } from '../context/TrackContext';

export default function TrackDetailsScreen({route,navigation}) {
  const {state,fetchTracks}=useContext(TrackContext)
console.log(route)
  const { _id } = route.params;
  const track=state.find(track=>track._id===_id);
  const initialCoords=track.locations[0].coords;

  return (
      
    <View >
      <Text>{track.name}</Text>
      <MapView style={styles.map} initialRegion={
        { latitudeDelta: 0.01,
          longitudeDelta: 0.1,...initialCoords}
      }>

        <Polyline coordinates={track.locations.map((loc)=>loc.coords)}/>
      </MapView>
   </View>
  );
}

const styles = StyleSheet.create({ 
  map:{height:300}
  
});