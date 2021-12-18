import React,{useState} from "react";
import {
  View,
  Text,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import styles from "./Styles";
import { Images,FONTS,COLORS } from "../../../Constants/Index";
const backGroundImgHeight = Dimensions.get("screen").height;
const buttonLengths = 50;
const buttonBorderRadius = buttonLengths / 2;

const Login = ({navigation}) => {
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

  const socialLogins = [
    {
      name: "facebook",
      iconname: "facebook",
      type: "font-awesome",
      color: COLORS.facebookColor
    },
    { name: "google", iconname: "google", type: "font-awesome", color: COLORS.googleColor },
    { name: "mobile", iconname: "mobile", type: "font-awesome", color: COLORS.phoneNumColor }
  ];

  const Socials = () =>
    socialLogins.map((social) => (
      <TouchableOpacity
        style={{
          borderWidth: 0.5,
          borderColor: "white",
          width: "20%",
          padding: 10,
          marginLeft: 10,
          borderWidth: 0.5,
          borderColor: "rgba(0,0,0,.4)",
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
        key={social.name}
      >
        <Icon name={social.iconname} type={social.type} color={social.color}/>
      </TouchableOpacity>
    ));

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        source={Images.backImg}
        style={styles.backgroundImg}
      >
        <Image source={Images.logo} />
      </ImageBackground>
      <View style={styles.contentView}>
        <Text style={{...FONTS.h1,marginBottom:10}}>Welcome Back</Text>
        <KeyboardAvoidingView>


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
            paddingLeft:10,
            paddingRight:10
          }}
        />
        <Input
          leftIcon={
            <Icon name="lock" type="font-awesome" style={{ marginRight: 10 }} />
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
        </KeyboardAvoidingView>
        <TouchableOpacity style={{ alignItems: "flex-end", paddingRight: 10 }}>
          <Text style={{ color: COLORS.textLinks,...FONTS.body3 }}>forgot password?</Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 20,
            marginBottom:5,
          }}
        >
          <Text style={{...FONTS.body1}}>Sign in</Text>
          <Button
            icon={
              <Icon name="long-arrow-right" type="font-awesome" color="white" />
            }
            buttonStyle={{
              backgroundColor: COLORS.LinkbuttonColor,
              borderRadius: buttonBorderRadius,
              justifyContent: "center",
              alignItems: "center",
              width: buttonLengths,
              height: buttonLengths
            }}
            onPress={()=>navigation.navigate('HomePage')}
          />
        </View>
        <Text style={{textAlign:'center',...FONTS.body2,marginBottom:5}}>or</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          
          <Socials />
        </View>
        <View style={{flexDirection:'row',marginTop:20,alignItems:'center',justifyContent:'center'}}>
          <Text style={{...FONTS.body2}}>Don’t have account yet?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('Register')}>
            <Text style={{...FONTS.body2,color:COLORS.textLinks}}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
