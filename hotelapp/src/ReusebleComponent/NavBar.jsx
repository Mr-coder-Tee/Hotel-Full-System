import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Icon, Badge } from "react-native-elements";
import { SIZES, FONTS, COLORS } from "../../Constants/Index";

const size = SIZES.screenWidth * 0.08;

const NavBar = ({ navigation, Route }) => {
  const notification = true;
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ ...FONTS.body2 }}>Hi Terrence</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity activeOpacity={.7} style={styles.touchablesStyle} onPress={()=>navigation.openDrawer()}>
          <Icon name="user" type="font-awesome" size={size / 2} />
          {notification && (
            <Badge
              status="success"
              containerStyle={{ position: "absolute", top: -4, right: -4 }}
              badgeStyle={{
                width: 12,
                height: 12,
                borderRadius: 10,
                backgroundColor: "#FFA500"
              }}
            />
          )}
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.touchablesStyle}>
          <Icon name="bell" type="font-awesome" size={size / 2} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: SIZES.screenHeight * 0.07,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20
  },
  touchablesStyle: {
    marginLeft: 5,
    borderWidth: 0.5,
    borderColor: COLORS.Darkgray,
    borderRadius: 10,
    width: size,
    height: size,
    justifyContent: "center",
    alignItems: "center"
  }
});
