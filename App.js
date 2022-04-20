// UCM Interior Maps Code

import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Imports are ordered as they appear in the React Navigation function below
import StartScreen from "./app/screens/StartScreen";
import HumphreysScreen from "./app/screens/HumphreysScreen";
import EdwardsScreen from "./app/screens/EdwardsScreen";
import MorrisScreen from "./app/screens/MorrisScreen";

const Stack = createNativeStackNavigator();

//React Navigation function that manages each screen
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Start Screen */}
        <Stack.Screen 
        name="start" 
        component={StartScreen} 
        options={{ 
          title: 'UCM Interior Maps',
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#cf202e',
          },
          headerTitleAlign: 'center' }}/>
          
        {/* P A Humphreys Screen */}
        <Stack.Screen
        name="humphreys"
        component={HumphreysScreen}
        options={{
          title: 'P. A. Humphreys',
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#cf202e',
          },
          headerTitleAlign: 'center'  }}/>

        {/* Ward Edwards Screen */}
        <Stack.Screen
        name="edwards"
        component={EdwardsScreen}
        options={{
          title: 'Ward Edwards',
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#cf202e',
          },
          headerTitleAlign: 'center'  }}/>

        {/* W C Morris Screen */}
        <Stack.Screen
        name="morris"
        component={MorrisScreen}
        options={{
          title: 'W. C. Morris',
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: '#cf202e',
          },
          headerTitleAlign: 'center'  }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}