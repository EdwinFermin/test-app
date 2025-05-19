// @types/react-native-switch-selector.d.ts
declare module "react-native-switch-selector" {
  import { Component } from "react";
  import { ViewStyle, TextStyle } from "react-native";

  export interface SwitchSelectorProps {
    options: { label: string; value: string | number; imageIcon?: any }[];
    initial?: number;
    onPress: (value: string | number) => void;
    textColor?: string;
    selectedColor?: string;
    buttonColor?: string;
    backgroundColor?: string;
    borderColor?: string;
    hasPadding?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
    selectedTextStyle?: TextStyle;
    imageStyle?: ViewStyle;
    accessibilityLabel?: string;
    testID?: string;
    disabled?: boolean;
    bold?: boolean;
    animationDuration?: number;
    valuePadding?: number;
    height?: number;
    borderRadius?: number;
    fontSize?: number;
  }

  export default class SwitchSelector extends Component<SwitchSelectorProps> {}
}
