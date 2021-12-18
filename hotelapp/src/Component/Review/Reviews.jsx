import React from "react";
import { View, Text,FlatList } from "react-native";
import styles from "./Styles";
import Back from "../../ReusebleComponent/Back";
import ReviewCard from "../../ReusebleComponent/ReviewCard";
import { FONTS,COLORS,dummyData } from "../../../Constants/Index";
import Rating from "../../ReusebleComponent/Rating";
const height=5

const Reviews = ({ navigation }) => {
  const Percent = ({ type, percent,color }) => (
    <View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:10,justifyContent:'center'}}>
      <Text style={{textAlign:'right',width:80}}>{type}</Text>
      <View style={{flex:1,backgroundColor:COLORS.Darkgray,marginLeft:10,borderRadius:10,height:height,overflow:'hidden'}}>
            <View style={{width:`${percent}%`,backgroundColor:`${color}`,height:height}}/>
      </View>
    </View>
  );

  const reviews=dummyData.rev

  return (
    <View style={styles.container}>
      <Back navigation={navigation} currentLocation="Review" />
      <View style={styles.reviewContainer}>
        <View style={{ marginVertical: 10 }}>
          <View style={{ alignItems: "center" }}>
            <Text style={{ ...FONTS.h1 }}>4.3</Text>
            <Rating rate={4.3} showText={false} />
            <Text style={{ ...FONTS.body3 }}>Based on 13 reviews</Text>
          </View>
          <Percent type="Exellent" percent={84} color='green'/>
          <Percent type="Good" percent={66} color='lightgreen'/>
          <Percent type="Average" percent={50} color='orange'/>
          <Percent type="Below Average" percent={39} color='yellow'/>
          <Percent type="Poor" percent={10} color='red'/>
        </View>
        <FlatList
        showsVerticalScrollIndicator={false}
            data={reviews}
            renderItem={({item})=>(
                <ReviewCard review={item}/>
            )}
        />
        </View>
    </View>
  );
};

export default Reviews;
