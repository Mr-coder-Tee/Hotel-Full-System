import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { Icon,Button } from "react-native-elements";
import { SIZES, COLORS, FONTS } from "../../../Constants/Index";
import Back from "../../ReusebleComponent/Back";
import styles from "./Styles";

const width = SIZES.screenHeight * 0.15;

const img = {
  uri: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
};

const stars = [
  { id: 1, isClicked: true },
  { id: 2, isClicked: true },
  { id: 3, isClicked: false },
  { id: 4, isClicked: false },
  { id: 5, isClicked: false }
];

const WriteReview = () => {
  return (
    <View style={styles.container}>
      <View style={{ height: width, backgroundColor: COLORS.buttonColor }}>
        <Back currentLocation={"Feed back"} navigation={1} />
      </View>
      <View style={styles.viewContainer}>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 20,
              marginRight: 10
            }}
          >
            <Image
              source={img}
              style={{ width: "100%", height: "100%", borderRadius: 20 }}
            />
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text numberOfLines={1} style={{ ...FONTS.h4 }}>
              Hotel Name
            </Text>
            <Text>4 rooms,4 Adults</Text>
            <Text>29 Jan 2021 - 2 Feb 2021</Text>
            <Text numberOfLines={2}>Location</Text>
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ ...FONTS.h2 }}>Give Feedback</Text>
          <Text style={{ ...FONTS.body3, marginTop: 20 }}>How did we do?</Text>
          <View style={{ flexDirection: "row" }}>
            {stars.map((star) => (
              <TouchableOpacity
                onPress={() => {
                  console.log(star);
                }}
                activeOpacity={0.5}
                key={star.id}
                style={{
                  padding: 10,
                  borderWidth: 0.5,
                  marginLeft: 5,
                  borderRadius: 10,
                  borderColor: COLORS.gray
                }}
              >
                {star.isClicked ? (
                  <Icon
                    name="star"
                    type="font-awesome"
                    color={COLORS.goldColor}
                  />
                ) : (
                  <Icon
                    name="star-o"
                    type="font-awesome"
                    color={COLORS.goldColor}
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
          <TextInput
            placeholder="Care to share more about your expirence"
            style={{
              borderColor: COLORS.gray,
              borderWidth: 1,
              padding: 10,
              borderRadius: 10,
              textAlignVertical: "top",
              marginTop:30
            }}
            multiline
            numberOfLines={10}
          />
          <Button title='Send Feedback' containerStyle={{marginTop:20,borderRadius:20,width:150,alignSelf:'center'}} buttonStyle={{backgroundColor:COLORS.buttonColor,paddingVertical:10}} titleStyle={{...FONTS.h4}}/>
        </View>
      </View>
    </View>
  );
};

export default WriteReview;
