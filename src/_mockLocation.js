import * as Location from 'expo-location';
const tenMetersWithDegrees=0.001;
const getLocation=increment=>{
    return { 
        "coords":  {
          "accuracy": 18.020000457763672,
          "altitude": -45.29999923706055,
          "altitudeAccuracy": 1.3333333730697632,
          "heading": 0,
          "latitude": 22.9670759 +increment*tenMetersWithDegrees,
          "longitude": 88.4616153+ increment*tenMetersWithDegrees,
          "speed": 0,
        },
        "mocked": false,
        "timestamp": 1,
      }
}
let counter=0;
setInterval(() => {
    Location.EventEmitter.emit("Expo.locationChanged",{
        watchId:Location._getCurrentWatchId(),
        location:getLocation(counter)

    }
    
   );
//    counter++
//    console.log(counter)
}, 1000);
