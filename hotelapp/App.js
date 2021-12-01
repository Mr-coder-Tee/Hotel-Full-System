import React from 'react';
import { StyleSheet, Text, View,SafeAreaView ,StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



import {ResetPassword,Welcome,Home,Splashscreen,Login,Register} from './src/Component/Index'
import AboutHotel from './src/Component/AboutHotel/AboutHotel';
import Location from './src/Component/Map/Location';
import CallOut from './src/ReusebleComponent/CallOut';
import History from './src/Component/History/History';
import WriteReview from './src/Component/WriteReview/WriteReview';
import CommentCard from './src/ReusebleComponent/CommentCard';
import GalaryView from './src/Component/ViewGalary/GalaryView';
import Reviews from './src/Component/Review/Reviews'




const Stack=createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerShown: false
        }}
        initialRouteName='HomePage'
        >
        <Stack.Screen name="Splashscreen" component={Splashscreen}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
        <Stack.Screen name="HomePage" component={Home}/>
        <Stack.Screen name="ResetPassword" component={ResetPassword}/>
        <Stack.Screen name="AboutHotel" component={AboutHotel}/>
        <Stack.Screen name="Location" component={Location}/>
        <Stack.Screen name="Reviews" component={Reviews}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    // marginTop:StatusBar.currentHeight,
  },
});
