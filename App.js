import * as React from "react";
import './Polyfillis'
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./navigation/DrawerNavigator";
import Polyfillis from "./Polyfillis";
import  LoginScreen from './screens/LoginScreen';
import RegisterScreen from "./screens/Register";
import {createStackNavigator} from '@react-navigation/stack'
import * as firebase from 'firebase'
import { firebaseConfig } from "./config";

if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig)
} else{
  firebase.app()
}

const stack = createStackNavigator()
const StackNav = ()=> {
  return(
    <Stack.Navigator initialRouteName = "Login" screenOptions = {{
      headerShown:false,
      gestureEnabled:false,
    }}>
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    <Stack.Screen name="Dashboard" component={DrawerNavigator} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}