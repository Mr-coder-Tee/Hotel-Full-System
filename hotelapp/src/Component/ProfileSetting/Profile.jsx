import React, { useState,useRef } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  KeyboardAvoidingView
} from "react-native";
import TextInputs from "../TextInputs/TextInputs";
import styles from "./Styles";
import Back from "../../ReusebleComponent/Back";
import { Icon ,Button} from "react-native-elements";
import { COLORS } from "../../../Constants/Index";
import BottomSheetUplaodImage from "../../ReusebleComponent/BottomSheetUplaodImage";
const inputWidth = Dimensions.get("screen").width * 0.7;

const Profile = ({navigation}) => {
  const ImgaePickerBottomSheet = useRef();
  const [fullName, setFullName] = useState();
  const [email, setEmail] = useState();
  const [phoneNum, setPhoneNum] = useState();
  const [password, setPassword] = useState();
  const [newPassword, setNewPassword] = useState();

  const profile = {
    uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  };

  return (
    <View style={styles.container}>
      <BottomSheetUplaodImage ImgaePickerBottomSheet={ImgaePickerBottomSheet}/>

      {/* <Back navigation={navigation} currentLocation="Profile" /> */}
      <View style={styles.viewContainer}>
        <View style={styles.holder}>
          <View style={styles.imgContainer}>
            <Image
              source={profile}
              style={{ width: "100%", height: "100%", borderRadius: 15 }}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={{
                position: "absolute",
                bottom: -15,
                right: 0,
                backgroundColor: "rgba(196,196,196,.9)",
                padding: 5,
                borderRadius: 10
              }}
              onPress={()=>ImgaePickerBottomSheet.current.show()}
            >
              <Icon name="camera" type="font-awesome" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <KeyboardAvoidingView style={{ paddingHorizontal: 20 ,marginTop:30}}>
          <TextInputs placeholder="Full Name" name="fullName" editable={false} value={fullName} onChange={(text)=>setFullName(text)}/>
          <TextInputs placeholder="Email" name="email" editable={false} value={email} onChange={(text)=>setEmail(text)}/>
          <TextInputs placeholder="Phone Number" name="phonenum" editable={false} value={phoneNum} onChange={(text)=>setPhoneNum(text)}/>
          <TextInputs placeholder="Current Password" name="password" editable={false} value={password} onChange={(text)=>setPassword(text)}/>
          <TextInputs placeholder="New Password" name="newpassword" editable={false} value={newPassword} onChange={(text)=>setNewPassword(text)}/>
      </KeyboardAvoidingView>
      <Button title="Update" containerStyle={{width:100,alignSelf:'center',marginTop:30,}} buttonStyle={{backgroundColor:COLORS.buttonColor}}/>
    </View>
  );
};

export default Profile;
