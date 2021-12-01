import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { COLORS, FONTS } from "../../Constants/Index";
var stars = 5;

const Rating = ({ rate, showText }) => {
  var rating = rate;
  const [starArr, setStarArray] = useState([]);

  useEffect(() => {
    const arr = [];

    const fillArray = () => {
      while (rating > 0) {
        if (rating >= 1) {
          arr.push(1);
        } else {
          arr.push(0.5);
        }
        rating--;
      }
    };
    fillArray();
    setStarArray(arr);
  }, []);

  // <Icon name="star" type="font-awesome" color={COLORS.goldColor}/>
  // <Icon name="star-half" type="font-awesome" color={COLORS.goldColor}/>
  // <Icon name="star-o" type="font-awesome" color={COLORS.goldColor}/>

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      {starArr.map((star, index) =>
        star === 1 ? (
          <Icon
            name="star"
            type="font-awesome"
            color={COLORS.goldColor}
            key={index}
          />
        ) : (
          <Icon
            name="star-half"
            type="font-awesome"
            color={COLORS.goldColor}
            key={index}
          />
        )
      )}
      {showText && (
        <Text style={{ ...FONTS.body4, marginLeft: 10 }}>{rate}</Text>
      )}
    </View>
  );
};

export default Rating;
