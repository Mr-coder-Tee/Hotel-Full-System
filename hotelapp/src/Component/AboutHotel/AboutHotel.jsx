import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import Back from "../../ReusebleComponent/Back";
import styles from "./Styles";
import { FONTS, COLORS, dummyData } from "../../../Constants/Index";
import RenderHotelGalary from "../../ReusebleComponent/RenderHotelGalary";
import { Icon, Button } from "react-native-elements";
import Rating from "../../ReusebleComponent/Rating";
import Reviews from "../../ReusebleComponent/Reviews";

const AboutHotel = ({ route, navigation }) => {
  const { data } = route.params;
  const hotelImg = {
    uri: data.outSidePhoto,
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={hotelImg}
        resizeMode="cover"
        style={styles.hotelBackground}
      >
        <Back navigation={navigation} />
        <View style={{ position: "absolute", bottom: 50 }}>
          <FlatList
            data={data.galary}
            renderItem={({ item }) => <RenderHotelGalary galary={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ImageBackground>
      <View style={styles.viewContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: 20,
            }}
          >
            <Text numberOfLines={1} style={{ ...FONTS.h2 }}>
              {data.hotelname}
            </Text>
            <TouchableOpacity
              style={styles.mapTouch}
              activeOpacity={0.6}
              onPress={() => navigation.navigate("Location", { data: data })}
            >
              <Icon name="map" type="font-awesome" color={COLORS.white} />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 5, marginBottom: 10 }}>
            <Rating rate={data.rating} />
          </View>
          <View
            style={{
              justifyContent: "space-between",
              paddingRight: 20,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Reviews hotelreviews={data.reviews} navigation={navigation}/>
            <Text>{data.reviews.length + " reviews"}</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ ...FONTS.h4 }}>About our hotel</Text>
            <Text style={{ ...FONTS.body4 }} numberOfLines={5}>
              {data.descrip}
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ ...FONTS.h4 }}>Our Facilies</Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {data.facilities.map((facility) => (
                <View
                  key={facility.id}
                  style={{
                    padding: 10,
                    backgroundColor: "rgba(196,196,196,.5)",
                    borderRadius: 10,
                    margin: 5,
                  }}
                >
                  <Icon name={facility.iconname} type={facility.icontype} />
                </View>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.bookContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Icon name="money" type="font-awesome" color={COLORS.white} />
          <Text style={{ ...FONTS.h2, color: "white", marginLeft: 10 }}>
            {data.price}
          </Text>
        </View>
        <Button
          title="Book Now"
          buttonStyle={{
            backgroundColor: COLORS.buttonColor,
            // paddingHorizontal: 40,
            // paddingVertical: 10,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

export default AboutHotel;
