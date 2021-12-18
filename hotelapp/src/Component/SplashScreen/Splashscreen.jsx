import React from "react";
import { ImageBackground, Image, View } from "react-native";
import styles from "./Styles";
import { Images } from "../../../Constants/Index";

const Splashscreen = () => {
  const background = {
    uri: "https://images.unsplash.com/photo-1533836506892-a4c329362ff5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
  };
  return (
    <ImageBackground
      resizeMode="cover"
      source={background}
      style={styles.container}
    >
      <View style={styles.img}>
        <Image source={Images.logo}  />
      </View>
    </ImageBackground>
  );
};

export default Splashscreen;
