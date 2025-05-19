import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { COLORS } from "src/utils/Constants";

interface SearchInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

export default function SearchInput({
  placeholder,
  value,
  onChangeText,
}: SearchInputProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <View
        style={{
          justifyContent: "center",
          height: "100%",
          paddingHorizontal: 30,
          borderRadius: 50,
          backgroundColor: COLORS.orange,
        }}
      >
        <MaterialIcons
          name="search"
          size={30}
          color="white"
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 50,
    marginBottom: 30,
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    borderColor: "#E0E0E0",
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    borderRadius: 8,
    fontSize: 18,
    paddingLeft: 40,
  },
  searchIcon: {},
});
