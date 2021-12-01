import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { COLORS,dummyData,FONTS } from "../../Constants/Index";
import { Avatar } from "react-native-elements";
import Rating from '../ReusebleComponent/Rating'


const person=dummyData.rev[1]

const CommentCard = () => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        <Avatar rounded size="medium" source={{uri:person.avatar}} />
        <View style={{marginLeft:10}}>
            <Text style={{...FONTS.h4}}>User name</Text>
            <Rating rate={person.stars} />
        </View>
      </View>
      <Text style={{...FONTS.body3,marginTop:10}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident tenetur harum, nisi fugalla! Mollitia perferendis voluptas ex natus aliquid neque atque.
      </Text>
    </View>
  );
};

export default CommentCard;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,.3)",
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginBottom: 5,
    backgroundColor:'rgba(196,196,196,.3)',
  }
});
