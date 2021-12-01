import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { dummyData, SIZES, FONTS } from "../../../Constants/Index";
import Back from "../../ReusebleComponent/Back";
import styles from "./Styles";

const galary = dummyData.hotelGalary;
const height = SIZES.screenHeight * 0.15;
const pic = SIZES.screenHeight * 0.15 * 0.8;

const GalaryView = ({ renderIndex }) => {
  const [currentImg, setCurrentImg] = useState(galary[renderIndex]);
  const [data, setData] = useState([]);

  useEffect(() => {
    var temp = [];
    const filterArr = () => {
      temp = galary.filter((img) => img.id !== currentImg.id);
      setData(temp);
    };
    filterArr();
  }, [currentImg]);

  const RenderImage = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={{ height: pic, width: pic, marginLeft: 10 }}
      onPress={() => setCurrentImg(item)}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Back navigation={1} />
      <Image
        source={{ uri: currentImg.image }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />
      <View
        style={{
          position: "absolute",
          bottom: 10,
          flexDirection: "row",
          right: 0,
          left: 0,
          width: SIZES.screenWidth,
          height: height,
          padding: 10
        }}
      >
        {data.length > 0 ? (
          <FlatList
            data={data}
            renderItem={({ item }) => <RenderImage item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <View style={{backgroundColor:'rgba(255,255,255,.7)',width:'100%',justifyContent:'center'}}>
            <Text
              style={{
                alignSelf: "center",
                color: "black",
                textAlign: "center",
                ...FONTS.h3
              }}
            >
              There is nothing in the Galary!
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default GalaryView;
