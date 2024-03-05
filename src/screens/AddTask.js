import { View, Text, StyleSheet, Button } from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CustomTextInput from "../components/CustomTextInput";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import CustomButton from "../components/CustomButton";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddTask = ({ navigation, route }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const onPressBack = () => {
    navigation.goBack();
  };

  const onPressEdit = () => {
    if (taskName == "") {
      alert("Please Enter Task Name");
    } else if (taskDescription == "") {
      alert("Please Enter Task Description");
    } else {
      AsyncStorage.getItem("tasks")
        .then((data) => {
          if (data != null) {
            const tasks = JSON.parse(data);
            tasks[route.params.index] = { taskName, taskDescription };
            AsyncStorage.setItem("tasks", JSON.stringify(tasks))
              .then(() => {
                alert("Task Edited Successfully");
                navigation.goBack();
              })
              .catch(() => {
                alert("Failed to edit Task");
              });
          }
        })
        .catch(() => {
          alert("Failed to edit Task");
        });
    }
  };

  const onPressAdd = () => {
    if (taskName == "") {
      alert("Please Enter Task Name");
    } else if (taskDescription == "") {
      alert("Please Enter Task Description");
    } else {
      AsyncStorage.getItem("tasks")
        .then((data) => {
          if (data == null) {
            const tasks = [];
            tasks.push({ taskName, taskDescription });
            AsyncStorage.setItem("tasks", JSON.stringify(tasks))
              .then(() => {
                alert("Task Added Successfully");
                navigation.goBack();
              })
              .catch(() => {
                alert("Failed to add Task");
              });
          } else {
            const tasks = JSON.parse(data);
            tasks.push({ taskName, taskDescription });
            AsyncStorage.setItem("tasks", JSON.stringify(tasks))
              .then(() => {
                alert("Task Added Successfully");
                navigation.goBack();
              })
              .catch(() => {
                alert("Failed to add Task");
              });
          }
        })
        .catch(() => {
          alert("Failed to add Task");
        });
    }
  };

  useEffect(() => {
    if (route.params?.taskName) {
      setTaskName(route.params.taskName);
    }
    if (route.params?.taskDescription) {
      setTaskDescription(route.params.taskDescription);
    }
  }, []);

  return (
    <View style={styles.root}>
      <Header onPressBack={onPressBack} title={"Edit Tasks"} />
      <Text style={styles.titleText}>Please Enter Task Name</Text>
      <CustomTextInput
        placeholder={"Please Enter"}
        onChangeText={setTaskName}
        value={taskName}
      />

      <Text style={styles.titleText}>Please Enter Task Description</Text>
      <CustomTextInput
        placeholder={"Please Enter"}
        onChangeText={setTaskDescription}
        value={taskDescription}
      />
      {route.params?.taskName && route.params?.taskDescription ? (
        <CustomButton title={"Edit Task"} onPress={onPressAdd} />
      ) : (
        <CustomButton title={"Add Task"} onPress={onPressEdit} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  titleText: {
    fontSize: 15,
    fontWeight: "600",
    color: "black",
    marginLeft: wp(5),
    marginTop: hp(2.5),
  },
});

export default AddTask;
