import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { COLORS, FONTS } from "../../Constants/Index";

const Back = ({ navigation, currentLocation }) => {
  // onPress={()=>navigation.goBack()}
  const backBtn = () => {
    console.log("--->", navigation);
  };
  return (
    <TouchableOpacity
      style={{

        position: "absolute",
        top: 15,
        left: 15,
        zIndex:999,
        flex:1,
        flexDirection:'row',
        alignItems:'center'
      }}
      onPress={()=>navigation.goBack()}
    >
      <View style={{ borderWidth: 1,padding: 5, borderRadius: 10, backgroundColor: "rgba(255,255,255,.7)", borderColor: COLORS.gray,}}>
        <Icon name="long-arrow-left" type="font-awesome" />
      </View>
      {currentLocation && (
        <Text style={{  ...FONTS.h3,marginLeft:10 }}>
          {currentLocation}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Back;

const styles = StyleSheet.create({});
