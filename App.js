
import * as React from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BrowseScreen from "./components/BrowseScreen.js";
import TakePhoto from "./components/TakePhoto.js";
import EditPhotoDetail from './components/EditPhotoDetail.js';



const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Browse">
        <Stack.Screen name="Browse" component={BrowseScreen} options={{ title: 'Browse' }}/>
        <Stack.Screen name="TakePhoto" component={TakePhoto} options={{ title: 'Take a Photo' }}/>
        <Stack.Screen name="EditPhotoDetail" component={EditPhotoDetail} options={{ title: 'Image title' }}/>

      </Stack.Navigator>
  </NavigationContainer>
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
