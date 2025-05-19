import React from "react";
import { View, ViewStyle } from "react-native";

type Props = {
  height?: number;
  color?: string;
  style?: ViewStyle;
};

export default function ItemDivider({
  height = 1,
  color = "#E0E0E0",
  style,
}: Props) {
  return <View style={[{ height, backgroundColor: color }, style]} />;
}
