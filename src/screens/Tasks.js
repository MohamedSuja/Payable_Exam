import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import Header from "../components/Header";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tasks = ({ navigation }) => {
  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getTasks();
    });
    return unsubscribe;
  }, [navigation]);

  const getTasks = async () => {
    await AsyncStorage.getItem("tasks")
      .then((data) => {
        if (data != null) {
          setTaskData(JSON.parse(data));
        }
      })
      .catch(() => {
        alert("Failed to fetch data");
      });
  };

  const deleteTask = async (index) => {
    const tasks = taskData;
    tasks.splice(index, 1);
    await AsyncStorage.setItem("tasks", JSON.stringify(tasks))
      .then(() => {
        alert("Task Deleted Successfully");
        getTasks();
      })
      .catch(() => {
        alert("Failed to delete Task");
      });
  };

  const onPressAdd = () => {
    navigation.navigate("AddTask");
  };
  return (
    <View style={styles.root}>
      <Header title={"My Tasks"} onPressAdd={onPressAdd} />
      <FlatList
        data={taskData}
        renderItem={({ item, index }) => (
          <ListCard
            key={index}
            title={item.taskName}
            description={item.taskDescription}
            onPress={() => {
              getTasks();
            }}
            onPressDelete={() => {
              deleteTask(index);
            }}
            onPressEdit={() => {
              navigation.navigate("AddTask", {
                taskName: item.taskName,
                taskDescription: item.taskDescription,
                index,
              });
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: { flex: 1, alignItems: "center" },
});

export default Tasks;
