import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import styles from "./Styles";
import Back from "../../ReusebleComponent/Back";
import { Input, Icon, Button ,} from "react-native-elements";
import { FONTS, COLORS } from "../../../Constants/Index";
import HistoryCard from "../../ReusebleComponent/HistoryCard";

const margintop = StatusBar.currentHeight + 50;
const inputWidth = Dimensions.get("screen").width * 0.7;

const History = () => {
  const SearchIcon = () => (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.buttonColor,
        justifyContent: "center",
        alignItems: "center",
        width: 60,
        height: 60
      }}
    >
      <Icon name="search" type="font-awesome" color={COLORS.white} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Back navigation={1} currentLocation="History" />
      </View>
      <View style={{ marginTop: margintop }}>
        <View style={{ paddingHorizontal: 40, flexDirection: "row",justifyContent:'center',alignItems:'center' }}>
          <TextInput placeholder="Search History" style={{width:inputWidth,borderWidth:.5,borderRadius:10,padding:10,marginHorizontal:10}}/>
          <Button
            icon={
              <Icon name="search" type="font-awesome" color={COLORS.white} />
            }
            buttonStyle={{ padding:10 ,backgroundColor:COLORS.buttonColor}}
          />
        </View>
        <TouchableOpacity activeOpacity={.6} style={{paddingHorizontal:20,alignItems:'flex-end',marginVertical:15}}>
          <Icon name="delete-outline" type="material" color={COLORS.black} />
        </TouchableOpacity>
        <View style={{paddingHorizontal:10}}>
            <HistoryCard/>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default History;


