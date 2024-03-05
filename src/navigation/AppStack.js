import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Tasks from "../screens/Tasks";
import AddTask from "../screens/AddTask";

const Stack = createNativeStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Tasks"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tasks" component={Tasks} />
      <Stack.Screen name="AddTask" component={AddTask} />
    </Stack.Navigator>
  );
}
