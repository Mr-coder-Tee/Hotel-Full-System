import React,{useState} from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  ScrollView
} from "react-native";
import styles from "./Styles";
import { Images, FONTS, COLORS } from "../../../Constants/Index";
import { Input, Icon, Button } from "react-native-elements";
import Paint from "../../ReusebleComponent/Paint";
import { NavigationContainer } from "@react-navigation/native";
const backGroundImgHeight = Dimensions.get("screen").height;
const buttonLengths = 50;
const buttonBorderRadius = buttonLengths / 2;
const screenHieght = Dimensions.get("screen").height;
const paintHeight = screenHieght * 0.3;

const Register = ({navigation}) => {
  const [passView,setPassView]=useState(true)

  const PasswordToggle = () => (
    <TouchableOpacity activeOpacity={0.7} onPress={()=>setPassView(!passView)}>
      {passView ? (
        <Icon name="eye" type="font-awesome" style={{ marginRight: 10 }} />
      ) : (
        <Icon
          name="eye-slash"
          type="font-awesome"
          style={{ marginRight: 10 }}
        />
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <Paint height={paintHeight} />
        <View style={styles.contentView}>
          <Text style={{ ...FONTS.h1, marginBottom: 10 }}> Get Started</Text>
          <Input
            leftIcon={
              <Icon
                name="user-circle"
                type="font-awesome"
                style={{ marginRight: 10 }}
              />
            }
            placeholder="Full Names"
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
          <Input
            leftIcon={
              <Icon
                name="phone"
                type="font-awesome"
                style={{ marginRight: 10 }}
              />
            }
            placeholder="Phone Number"
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
          <Input
            leftIcon={
              <Icon
                name="lock"
                type="font-awesome"
                style={{ marginRight: 10 }}
              />
            }
            rightIcon={<PasswordToggle />}
            placeholder="Password"
            inputContainerStyle={{
              borderWidth: 0.5,
              justifyContent: "center",
              alignItems: "center",
              borderColor: "rgba(0,0,0,.2)",
              borderRadius: 20,
              paddingLeft: 10,
              paddingRight: 10
            }}
            secureTextEntry={passView}
          />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Text style={{ ...FONTS.body1, marginBottom: 10 }}>Sign up</Text>
            <Button
            onPress={()=>navigation.navigate('HomePage')}
              icon={
                <Icon
                  name="long-arrow-right"
                  type="font-awesome"
                  color="white"
                />
              }
              buttonStyle={{
                backgroundColor: COLORS.LinkbuttonColor,
                borderRadius: buttonBorderRadius,
                justifyContent: "center",
                alignItems: "center",
                width: buttonLengths,
                height: buttonLengths
              }}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginTop: 10,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text style={{ ...FONTS.body2 }}>Already Have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <Text style={{ ...FONTS.body2, color: COLORS.textLinks }}>
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Register;
