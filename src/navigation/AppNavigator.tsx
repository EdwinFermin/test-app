import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//
import BottomTabs from "./BottomTabs";
import UnderConstructionScreen from "@screens/UnderContructionScreen";
import PlayersStackNavigator from "./PlayerStack";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Players"
        tabBar={(props) => <BottomTabs {...props} />}
      >
        <Tab.Screen
          name="Calendar"
          component={UnderConstructionScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="GamesList"
          component={UnderConstructionScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Players"
          component={PlayersStackNavigator}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Camp"
          component={UnderConstructionScreen}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Player"
          component={UnderConstructionScreen}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
