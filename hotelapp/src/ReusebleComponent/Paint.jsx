import React from "react";
import { Image, Text, ImageBackground,Dimensions } from "react-native";
import { Images } from "../../Constants/Index";
const width=Dimensions.get('screen').width


const Paint = ({ height }) => {
  return (
    <ImageBackground
      resizeMode="cover"
      source={Images.backImg}
      style={{
        height: height,
        width:width,
        padding: 30,
        position:'absolute',
        top:0,
        left:0,
        right:0,
      }}
    >
      <Image source={Images.logo} />
    </ImageBackground>
  );
};

export default Paint;
