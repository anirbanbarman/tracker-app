
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './src/screens/AccountScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import TrackScreen from './src/screens/TrackScreen';


const Tab = createBottomTabNavigator();

export default function MainFlowScreen() {
    return (
        
        <Tab.Navigator  screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Track" component={TrackScreen} />
          <Tab.Screen name="TrackCreate" component={TrackCreateScreen} />
          <Tab.Screen name="Account" component={AccountScreen} />
        </Tab.Navigator>

     
    );
}

const styles = StyleSheet.create({

});