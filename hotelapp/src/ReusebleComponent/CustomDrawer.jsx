import React from "react";
import { StyleSheet, Text, View, Image,TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList
} from "@react-navigation/drawer";
import { dummyData, COLORS, FONTS } from "../../Constants/Index";
import { Icon } from "react-native-elements";

const CustomDrawer = (props) => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            padding: 10,
            backgroundColor: COLORS.secondary,
            justifyContent: "center",
            alignItems: "center",
            borderBottomWidth:1,
            borderBottomColor:COLORS.gray
          }}
        >
          <View style={styles.avatarContainer}>
            <Image
              source={{ uri: dummyData.user.uri }}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <Text style={{ ...FONTS.h4 }}>userNames</Text>
          <Text style={{ color: COLORS.Darkgray }}>userNames@gmail.com</Text>
        </View>
        <View style={{ flex:1,backgroundColor:COLORS.white,paddingVertical:10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{padding:10,borderTopColor:COLORS.gray,borderTopWidth:.5,flexDirection:'row',justifyContent:'center'}}>
          <TouchableOpacity style={{backgroundColor:COLORS.dangerRed,padding:15,borderRadius:10}}>
              <Icon name="sign-out" type="font-awesome" color='white' size={30}/>
          </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avatarContainer: {
    width: 100,
    height: 100,
    backgroundColor: "red",
    borderRadius: 50,
    overflow: "hidden"
  }
});
