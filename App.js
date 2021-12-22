
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainFlowScreen from './MainFlow';
import SignUpScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';

import { navigationRef } from './src/navigationRef';
import ResolveAuthScreen from './src/screens/ResolveAuthScreen';







const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <LocationProvider>
    <AuthProvider>
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{ headerShown: false }}  >
        <Stack.Screen name="auth" component={ResolveAuthScreen} />
          <Stack.Screen name="Signin" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignUpScreen} />
          <Stack.Screen name="mainFlow" component={MainFlowScreen} />

        </Stack.Navigator>

      </NavigationContainer>
    </AuthProvider>
    </LocationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
