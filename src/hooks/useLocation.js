import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default(shouldTrack,callback)=>{

const [location, setLocation] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);
const [subscriber,setSubscriber]=useState(null);
useEffect(() => {
  let subscriber;



    if(shouldTrack){


  (async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
   
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setErrorMsg("")
    console.log(location)
     subscriber= await Location.watchPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
        distanceInterval: 10,
        timeInterval: 1000
      },
      callback
      );
     
      setLocation(location);
  })();
}
else{

  if(subscriber){
    subscriber.remove();
  }
  subscriber=null;


}

return()=>{
  if(subscriber){
    subscriber.remove();
  }

}


  
}, [shouldTrack,callback]);

return [errorMsg];
}