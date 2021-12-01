import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from "react-native";
import { Avatar } from "react-native-elements";
import { COLORS } from "../../Constants/Index";
const screenwidth=Dimensions.get("screen").width


const Reviews = ({ hotelreviews,navigation }) => {
  const [to, setTo] = useState();
  const [size,setSize]=useState('small')
  const [remain, setRemain] = useState("");

  
  useEffect(() => {
    const range = () => {
      if (hotelreviews.length >= 5) {
        if (hotelreviews.length - 4 >= 100) {
          setRemain("99+");
        } else {
          setRemain(hotelreviews.length - 4);
        }
        setTo(4);
      } else {
        setTo(hotelreviews.length);
      }
    };
    const screenSetter=()=>{
        if(screenwidth>500&&screenwidth<700){
          setSize('medium')
        }else if(screenwidth>700){
          setSize('large')
        }
    }
    screenSetter()
    range();
  }, []);
  return (
    <TouchableOpacity style={{ flexDirection: "row", paddingLeft: 15 }} activeOpacity={.7} onPress={()=>navigation.navigate('Reviews')}>
      {hotelreviews.slice(0, to).map((review) => (
        <Avatar
          key={review.id}
          rounded
          size={size}
          source={{ uri: review.avatar }}
          containerStyle={{
            borderColor: "white",
            borderWidth: 1,
            marginLeft: -15
          }}
        />
      ))}

      {hotelreviews.length >= 5 && (
        
          <Avatar
            rounded
            size={size}
            title={remain}
            containerStyle={{
              borderColor: "white",
              borderWidth: 1,
              marginLeft: -15,
              backgroundColor: "#C4C4C4"
            }}
          />
      )}
    </TouchableOpacity>
  );
};

export default Reviews;

const styles = StyleSheet.create({});
