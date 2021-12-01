import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Dimensions,
  Image
} from "react-native";
import { COLORS,FONTS } from "../../Constants/Index";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { Icon } from "react-native-elements";
const cardWidth = Dimensions.get("screen").width;
const cardHeight = Dimensions.get("screen").width * 0.3;

const HistoryCard = () => {
  const img = {
    uri: "https://images.unsplash.com/photo-1562133567-b6a0a9c7e6eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  };

  const RenderRightSwipe = () => (
    <TouchableOpacity style={{backgroundColor:COLORS.dangerRed,justifyContent:'center',paddingHorizontal:20}}>
      <Text style={{...FONTS.h4,color:COLORS.white}}>DELETE</Text>
    </TouchableOpacity>
  );

  return (
    <Swipeable renderRightActions={RenderRightSwipe}>
      <TouchableOpacity
        style={{
          backgroundColor: "rgba(196,196,196,.2)",
          borderWidth: 0.5,
          borderColor: "rgba(0,0,0,.2)",
          padding: 10,
          borderRadius: 10,
          height: cardHeight,
          flexDirection: "row",
          

        }}
      >
        <View style={{ width: "25%", height: "100%" }}>
          <Image source={img} style={{ width: "100%", height: "100%" }} />
        </View>
        <View style={{marginLeft:10}}>
            <Text numberOfLines={1} style={{...FONTS.h4,}}>Hotel Name</Text>
            <Text style={{...FONTS.body3,}}>2 room,2 adults</Text>
            <View style={{flexDirection:'row' ,alignItems:'center'}}>
                <Icon name="bed" type="font-awesome"/>
                <Text style={{...FONTS.body3,marginLeft:5}}>14/Feb/2021 - 16/Feb/2021</Text>
            </View>
            <Text numberOfLines={2} style={{...FONTS.body3,}}>Address</Text>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default HistoryCard;

const styles = StyleSheet.create({});
