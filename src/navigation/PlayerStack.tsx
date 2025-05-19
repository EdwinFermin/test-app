import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//
import PlayersScreen from "@screens/PlayersScreen";
import PlayerDetailScreen from "@screens/PlayerDetailScreen";

export type StackParamList = {
  PlayersList: undefined;
  Detail: { playerId: string };
};

const Stack = createNativeStackNavigator<StackParamList>();

export default function PlayersStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlayersList"
        component={PlayersScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={PlayerDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
