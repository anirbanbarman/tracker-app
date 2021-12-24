 
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { ListItem } from 'react-native-elements';
import { useContext } from 'react/cjs/react.development';
import { Context as TrackContext } from '../context/TrackContext';





export default function TrackListScreen({navigation}) {

  const {state,fetchTracks}=useContext(TrackContext)


    useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
   fetchTracks();
    });

    return unsubscribe;
  }, [navigation]);
  return (
      
    <View >
      <FlatList
      date={state}
      keyExtractor={item=>item._id}
      renderItem={({item})=>{
return <TouchableOpacity onPress={()=>{navigation.navigate("TrackDetail",{_id:item._id})}}>
<ListItem chevron title={item.name}/>
</TouchableOpacity>

      }}
      
      />
   </View>
  );
}

const styles = StyleSheet.create({ 
  
});