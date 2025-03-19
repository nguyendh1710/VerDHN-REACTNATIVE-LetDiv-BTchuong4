import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./PrimaryButton .style";
import { LinearGradient } from "expo-linear-gradient";

export default function PrimaryButton({ children, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <LinearGradient
          colors={[ "#F72307", "#FF932B"]}
          style={styles.gradient}
        >
          {typeof children === "string" ? (
            <Text style={styles.buttonText}>{children}</Text>
          ) : (
            children
          )}
        </LinearGradient>
      </View>
    </TouchableOpacity>
  );
}
