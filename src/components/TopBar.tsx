import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
//
import { COLORS } from "src/utils/Constants";

type TopBarProps = {
  title: string;
  showBack?: boolean;
};

export default function TopBar({ title, showBack = true }: TopBarProps) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      {showBack && (
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.orange} />
        </TouchableOpacity>
      )}

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    overflow: "hidden",
    marginBottom: 40,
  },
  backButton: {
    position: "absolute",
    left: 36,
    zIndex: 2,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    zIndex: 1,
  },
});
