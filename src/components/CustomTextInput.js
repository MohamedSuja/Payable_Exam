import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const CustomTextInput = (props) => {
  const { placeholder, onChangeText, value } = props;
  return (
    <TextInput
      style={styles.container}
      placeholder={placeholder}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: hp(2),
    height: hp(6),
    paddingLeft: wp(2),
    alignSelf: "center",
  },
});

export default CustomTextInput;
