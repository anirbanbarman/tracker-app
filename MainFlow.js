
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackScreen from './src/screens/TrackScreen';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function MainFlowScreen() {
    return (
        
        <Tab.Navigator  
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Track') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'TrackCreate') {
              iconName = focused
                ? 'ios-add-circle'
                : 'ios-add-circle-outline';
            }
            else if (route.name === 'Account') {
              iconName =  focused
              ? 'person-add-outline'
              : 'person-add-outline'
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        
        
        // screenOptions={{ headerShown: false }}
        
        >
          <Tab.Screen name="Track" component={TrackScreen} />
          <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>

     
    );
}

const styles = StyleSheet.create({

});