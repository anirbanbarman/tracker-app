import * as Location from 'expo-location';
const tenMetersWithDegrees=0.01;
const getLocation=increment=>{
    return { 
        "coords":  {
          "accuracy": 5,
          "altitude": 5,
          "altitudeAccuracy": 5,
          "heading": 0,
          "latitude": 22.9670759 +increment*tenMetersWithDegrees,
          "longitude": 88.4616153+ increment*tenMetersWithDegrees,
          "speed": 0,
        },
        "mocked": false,
        "timestamp": 10000,
      }
}
let counter=0;
setInterval(() => {
    Location.EventEmitter.emit("Expo.locationChanged",{
        watchId:Location._getCurrentWatchId(),
        location:getLocation(counter)

    }
    
   );  
    // counter++
//    console.log(counter)
}, 1000);
