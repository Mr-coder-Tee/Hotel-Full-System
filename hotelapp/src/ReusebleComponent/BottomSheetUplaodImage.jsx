import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { SIZES, COLORS, FONTS } from "../../Constants/Index";
const height = SIZES.screenHeight * 0.2;
const size = SIZES.screenWidth * 0.12;

const BottomSheetUplaodImage = ({ ImgaePickerBottomSheet }) => {
  return (
    <Animated.View>
      <BottomSheet
        hasDraggableIcon
        ref={ImgaePickerBottomSheet}
        height={height}
      >
        <View style={{ padding: 10, flexDirection: "row" }}>
          <View style={{alignItems:'center',marginRight:20}}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{
              backgroundColor: COLORS.primary,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 5,
              borderRadius: 30,
              width: size,
              height: size,
            }}
          >
            <Icon name="add-a-photo" type="material" color="white" />
          </TouchableOpacity>
          <Text>Take a Picture</Text>
          </View>
          <View style={{alignItems:'center',marginRight:20}}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                backgroundColor: COLORS.primary,
                width: size,
                height: size,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 5,
                borderRadius: 30,
              }}
            >
              <Icon name="add-photo-alternate" type="material" color="white" />
            </TouchableOpacity>
            <Text>Add a Picture</Text>
          </View>
        </View>
      </BottomSheet>
    </Animated.View>
  );
};

export default BottomSheetUplaodImage;

const styles = StyleSheet.create({});
