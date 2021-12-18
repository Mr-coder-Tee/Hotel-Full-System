import React from "react";
import { View, Text, Dimensions } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import {COLORS,FONTS} from '../../../Constants/Index'
import Paint from "../../ReusebleComponent/Paint";
import styles from "./Styles";
const paintHeight = Dimensions.get("screen").height * 0.6;

const ResetPassword = () => {
  return (
    <View style={styles.container}>
      <Paint height={paintHeight} />
      <View style={styles.contentView}>
        <Text style={{...FONTS.h1}}>Reset Password</Text>
        <Input
          leftIcon={
            <Icon name="at" type="font-awesome" style={{ marginRight: 10 }} />
          }
          placeholder="Email"
          inputContainerStyle={{
            borderWidth: 0.5,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "rgba(0,0,0,.2)",
            borderRadius: 20,
            paddingLeft: 10,
            paddingRight: 10
          }}
        />
        <Button
            title="Reset Password"
            containerStyle={{ borderRadius: 10, width: '80%',alignSelf:'center' }}
            buttonStyle={{ backgroundColor: COLORS.buttonColor }}
          />
      </View>
    </View>
  );
};

export default ResetPassword;
