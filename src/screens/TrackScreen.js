
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TrackDetailsScreen from './TrackDetailsScreen';
import TrackListScreen from './TrackListScreen';

const trackStack = createNativeStackNavigator();

export default function TrackScreen() {
    return (

        <trackStack.Navigator  screenOptions={{ headerShown: false }} initialRouteName='TrackList'>
            <trackStack.Screen name="TrackList" component={TrackListScreen} />
            <trackStack.Screen name="TrackDetails" component={TrackDetailsScreen} />

        </trackStack.Navigator>
    );
}

const styles = StyleSheet.create({

});