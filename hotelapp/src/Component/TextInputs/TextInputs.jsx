import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import { COLORS } from "../../../Constants/Index";

const inputWidth = Dimensions.get("screen").width * 0.7;

const TextInputs = ({ ...props }) => {
  const { editable, name, placeholder, onChange, value } = props;
  const [editInput, setEditInput] = useState(editable);
  // console.log('>>>>>',props)

  return (
    <View
      style={{
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderWidth: 0.5,
        borderRadius: 10,
        padding: 10
      }}
    >
      {name !== "newpassword" ? (
        <>
          <TextInput
            editable={editInput}
            placeholder={placeholder}
            value={value}
            name={name}
            style={{ width: inputWidth, padding: 5 }}
            onChangeText={(text) => onChange(text)}
          />
          <TouchableOpacity onPress={() => setEditInput(!editInput)}>
            <Icon
              name="pencil-square-o"
              type="font-awesome"
              color={!editInput ? COLORS.LinkbuttonColor : COLORS.black}
            />
          </TouchableOpacity>
        </>
      ) : (
        <TextInput
          placeholder={placeholder}
          value={value}
          name={name}
          style={{ width: inputWidth, padding: 5 }}
          onChangeText={(text) => onChange(text)}
        />
      )}
    </View>
  );
};

export default TextInputs;
