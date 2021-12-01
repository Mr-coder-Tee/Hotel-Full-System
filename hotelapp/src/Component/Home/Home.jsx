import React from "react";
import { View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  HomeScreen,
  HistoryScreen,
  ProfileScreen,
  TripsScreen
} from "../DrawerScreens/index";
import { Icon } from "react-native-elements";
import { FONTS, COLORS } from "../../../Constants/Index";
import CustomDrawer from "../../ReusebleComponent/CustomDrawer";

const Drawer = createDrawerNavigator();
const Home = () => {
    const notifCount=11;
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { marginLeft: -25, ...FONTS.h4 },
        drawerActiveBackgroundColor: COLORS.primary,
        drawerInactiveBackgroundColor: COLORS.white,
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.black,
        drawerType:'front'
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="apartment" type="material" color={color} size={30} />
          )
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name="account-circle"
              type="material"
              color={color}
              size={30}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Trips"
        component={TripsScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="luggage" type="material" color={color} size={30} />
          )
        }}
      />
      <Drawer.Screen
        name="History"
        component={HistoryScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="history" type="material" color={color} size={30} />
          )
        }}
      />
      <Drawer.Screen
        name={"Notification ("+notifCount+")"}
        component={HistoryScreen}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="notifications" type="material" color={color} size={30} />
          )
        }}
      />
    </Drawer.Navigator>
  );
};

export default Home;
