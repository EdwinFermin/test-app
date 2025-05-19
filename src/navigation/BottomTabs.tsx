import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
//
import { COLORS } from "src/utils/Constants";

const CustomBottomTab = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const middleIndex = 2;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: COLORS.orange,
        },
      ]}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const label = () => {
          switch (route.name) {
            case "Calendar":
              return "Calendario";
            case "GamesList":
              return "Lista de juegos";
            case "Players":
              return "Jogadores";
            case "Camp":
              return "Campo";
            case "Player":
              return "Jogador";
          }
        };

        const icon = () => {
          switch (route.name) {
            case "Calendar":
              return (
                <MaterialCommunityIcons
                  name="calendar-clock"
                  size={isMiddle ? 32 : 24}
                  color={isFocused ? COLORS.blue : isMiddle ? "#fff" : "white"}
                />
              );
            case "GamesList":
              return (
                <MaterialCommunityIcons
                  name="text-box-check-outline"
                  size={isMiddle ? 32 : 24}
                  color={isFocused ? COLORS.blue : isMiddle ? "#fff" : "white"}
                />
              );
            case "Players":
              return (
                <FontAwesome5 name="golf-ball" size={50} color={"white"} />
              );
            case "Camp":
              return (
                <MaterialIcons
                  name="golf-course"
                  size={isMiddle ? 32 : 24}
                  color={isFocused ? COLORS.blue : isMiddle ? "#fff" : "white"}
                />
              );
            case "Player":
              return (
                <MaterialCommunityIcons
                  name="golf-cart"
                  size={isMiddle ? 32 : 24}
                  color={isFocused ? COLORS.blue : isMiddle ? "#fff" : "white"}
                />
              );
          }
        };

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const isMiddle = index === middleIndex;

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            onPress={onPress}
            style={[styles.tab, isMiddle && styles.middleButtonContainer]}
            activeOpacity={0.7}
          >
            <View
              style={
                isMiddle
                  ? { ...styles.middleButton, backgroundColor: COLORS.blue }
                  : null
              }
            >
              {icon()}
            </View>
            {!isMiddle && (
              <Text
                style={[
                  styles.label,
                  { color: isFocused ? COLORS.blue : "white" },
                ]}
              >
                {label()}.
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    borderTopColor: "#eee",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -1 },
    shadowRadius: 4,
    elevation: 6,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  label: {
    fontSize: 12,
    marginTop: 2,
  },
  middleButtonContainer: {
    position: "relative",
    top: -20,
    zIndex: 10,
    flex: 1,
    alignItems: "center",
  },
  middleButton: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginBottom: 20,
    backgroundColor: "#6200ee",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 6,
  },
});

export default CustomBottomTab;
