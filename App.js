import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import EmailSignUpScreen from './app/screens/EmailSignUpScreen';
import KnowAboutScreen from './app/screens/KnowAboutScreen';
import OthersScreen from './app/screens/OthersScreen';
import HomeScreen from './app/screens/HomeScreen';
import PostScreen from './app/screens/PostScreen';
import CommunityScreen from './app/screens/CommunityScreen';


const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} >        
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="EmailSignUpScreen" component={EmailSignUpScreen} />
        <Stack.Screen name="KnowAboutScreen" component={KnowAboutScreen} />
        <Stack.Screen name="OthersScreen" component={OthersScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PostScreen" component={PostScreen} />
        <Stack.Screen name="CommunityScreen" component={CommunityScreen} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
  // console.log("App executed"); // change later
  //return <WelcomeScreen />;


