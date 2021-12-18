import React, { useState, useRef } from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Icon ,Button} from "react-native-elements";
import BottomSheet from "react-native-gesture-bottom-sheet";
import { FONTS, COLORS, SIZES } from "../../Constants/Index";

const SearchBottomSheet = ({ bottomSheet }) => {
  // const bottomSheet = useRef();
  const [adult,setAdults]=useState(0)
  const [rooms,setRooms]=useState(0)

  return (
    <Animated.View>
      <BottomSheet
        hasDraggableIcon
        ref={bottomSheet}
        height={SIZES.screenHeight / 2}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ ...FONTS.body1, marginRight: 10 }}>
              Search hotel
            </Text>
            <Icon
              name="map"
              type="font-awesome"
              color="white"
              containerStyle={{
                backgroundColor: COLORS.goldColor,
                padding: 10,
                borderRadius: 10
              }}
            />
          </View>
          <Text>find hotel as you need with demands</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <View style={styles.inputContainer}>
            <Icon
              name="map-marker"
              type="font-awesome"
              style={{ marginRight: 10 }}
            />
            <TextInput placeholder="Location" style={{ flex: 1 }} />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View style={styles.inputContainer}>
              <Icon
                name="calendar"
                type="font-awesome"
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Check-in"
                style={{ paddingHorizontal: 20 }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Icon
                name="calendar"
                type="font-awesome"
                style={{ marginRight: 10 }}
              />
              <TextInput
                placeholder="Check-out"
                style={{ paddingHorizontal: 20 }}
              />
            </View>
          </View>
          <View
            style={{
              justifyContent: "center",
              padding: 10,
              alignItems: "center",
              flexDirection:'row'
            }}
          >
            <View style={{ alignItems: "center",marginRight:10}}>
              <Text style={{ ...FONTS.body2 }}>Adults</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                disabled={adult===0}
                onPress={()=>setAdults(adult-1)}
                activeOpacity={.7}
                  style={{
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: COLORS.Darkgray,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    marginRight: 10
                  }}
                >
                  <Icon name="remove" type="material" />
                </TouchableOpacity>
                <Text style={{ color: "black", ...FONTS.body2 }}>{adult}</Text>
                <TouchableOpacity
                 onPress={()=>setAdults(adult+1)}
                activeOpacity={.7}
                  style={{
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: COLORS.Darkgray,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginLeft: 10
                  }}
                >
                  <Icon
                    name="add"
                    type="material"
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ alignItems: "center",marginLeft:10}}>
              <Text style={{ ...FONTS.body2 }}>Rooms</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                disabled={rooms===0}
                 onPress={()=>setRooms(rooms-1)}
                activeOpacity={.7}
                  style={{
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: COLORS.Darkgray,
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    marginRight: 10
                  }}
                >
                  <Icon name="remove" type="material" />
                </TouchableOpacity>
                <Text style={{ color: "black", ...FONTS.body2 }}>{rooms}</Text>
                <TouchableOpacity
                 onPress={()=>setRooms(rooms+1)}
                activeOpacity={.7}
                  style={{
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    borderColor: COLORS.Darkgray,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    marginLeft: 10
                  }}
                >
                  <Icon
                    name="add"
                    type="material"
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{paddingHorizontal:100,marginTop:20}}>

        <Button title="Search" buttonStyle={{backgroundColor:COLORS.buttonColor,paddingHorizontal:40,paddingVertical:10,borderRadius:10}}/>

        </View>
      </BottomSheet>
    </Animated.View>
  );
};

export default SearchBottomSheet;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 20
  }
});
