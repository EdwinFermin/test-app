import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function UnderConstructionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🚧</Text>
      <Text style={styles.text}>Esta pantalla esta bajo construcción.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  emoji: {
    fontSize: 56,
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    textAlign: "center",
    color: "#444",
  },
});
