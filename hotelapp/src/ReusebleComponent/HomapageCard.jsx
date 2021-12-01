import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions
} from "react-native";
import { COLORS, FONTS } from "../../Constants/Index";
import { Icon } from "react-native-elements";
const cardHieght = Dimensions.get("screen").height * 0.25;
const cardWidth = Dimensions.get("screen").width * 0.45;

const HomapageCard = ({hotel,navigation}) => {
  // console.log('--->',hotel.address)
  const img = {
    uri: hotel.outSidePhoto
  };
  return (
    <TouchableOpacity activeOpacity={.7} style={styles.container} onPress={()=>navigation.navigate('AboutHotel',{data:hotel})}>
      <Image source={img} style={styles.coverImg} />
      <View style={styles.details}>
        <View>
          <Text style={{ ...FONTS.h4, color: COLORS.white }} numberOfLines={1}>
           {hotel.hotelname}
          </Text>
          <Text style={{ ...FONTS.body3, color: COLORS.white }} numberOfLines={1}>
            {hotel.rooms+' rooms,'+hotel.beds+' bed(s)'}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="map-marker" type="font-awesome" color={COLORS.white} />
          <Text
            style={{ ...FONTS.body3, color: COLORS.white, marginLeft: 5 }}
            numberOfLines={1}
          >
           {hotel.address}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomapageCard;

const styles = StyleSheet.create({
  container: {
    height: cardHieght,
    width: cardWidth,
    position: "relative",
    borderRadius: 20,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    marginLeft:10
    
  },
  coverImg: {
    width: "100%",
    height: "100%"
  },
  details: {
    position: "absolute",
    bottom: 0,
    backgroundColor: COLORS.opacityColor,
    width: "100%",
    padding: 10,
    height:cardHieght*.45
  }
});
