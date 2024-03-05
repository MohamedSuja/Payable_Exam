import {
  View,
  Text,
  StyleSheet,
  Platform,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";

const Header = (props) => {
  const { onPressAdd, title, onPressBack } = props;
  return (
    <View style={styles.container}>
      {onPressBack && (
        <TouchableOpacity style={styles.backButton} onPress={onPressBack}>
          <Entypo name="chevron-left" size={50} color="black" />
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {onPressAdd && (
        <TouchableOpacity style={styles.addButton} onPress={onPressAdd}>
          <Ionicons name="add-circle-outline" size={50} color="green" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "lightgrey",
    paddingTop: Platform.OS == "ios" ? hp(6) : hp(2),
    alignItems: "center",
    justifyContent: "center",
    height: Platform.OS == "ios" ? hp(15) : hp(12),
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    color: "black",
  },
  addButton: {
    position: "absolute",
    right: wp(5),
    top: Platform.OS == "ios" ? hp(7) : hp(4),
  },
  backButton: {
    position: "absolute",
    left: wp(5),
    top: Platform.OS == "ios" ? hp(7) : hp(4),
  },
});

export default Header;
