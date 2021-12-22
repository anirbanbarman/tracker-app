import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default(shouldTrack,callback)=>{

const [location, setLocation] = useState(null);
const [errorMsg, setErrorMsg] = useState(null);
const [subscriber,setSubscriber]=useState(null)
useEffect(() => {
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
    const sub= await Location.watchPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation,
        distanceInterval: 10,
        timeInterval: 1000
      },
      callback
      );
      setSubscriber(sub)
    setLocation(location);
  })();
}
else{
subscriber.remove();
setSubscriber(null)

}


  
}, [shouldTrack]);

return [errorMsg];
}