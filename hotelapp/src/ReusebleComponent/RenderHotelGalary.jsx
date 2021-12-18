import React from "react";
import {
  
  TouchableOpacity,
  Image,
  StyleSheet,Dimensions
} from "react-native";

const size=Dimensions.get('screen').width*.2


const RenderHotelGalary = ({ galary }) => {
  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size,
        marginLeft: 10,
        borderColor: "white",
        overflow: "hidden",
        borderWidth: 1,
        borderRadius: 15
      }}
      activeOpacity={0.6}
    >
      <Image
        source={{ uri: galary.image }}
        style={{ width: '100%', height: '100%' }}
      />
    </TouchableOpacity>
  );
};

export default RenderHotelGalary;

const styles = StyleSheet.create({});
