import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const ListCard = (props) => {
  const { title, onPress, onPressDelete, onPressEdit, description } = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.deleteView} onPress={onPressDelete}>
          <MaterialIcons name="delete" size={30} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.editView} onPress={onPressEdit}>
          <FontAwesome5 name="edit" size={30} color="#2074fa" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: wp(90),
    backgroundColor: "grey",
    height: hp(10),
    justifyContent: "center",
    alignItems: "center",
    marginVertical: hp(0.5),
    borderRadius: 10,
  },
  text: { fontSize: 20, fontWeight: "600", color: "white" },
  descriptionText: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
    marginTop: hp(2.5),
  },
  deleteView: {},
  editView: {
    marginLeft: wp(2),
  },
  buttonView: {
    flexDirection: "row",
    position: "absolute",
    right: wp(2),
    top: hp(2),
  },
});

export default ListCard;
