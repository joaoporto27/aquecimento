import React from "react";
import { Text, TouchableOpacity, Link } from "react-native";

export default function Button( {onPress}) {
  return (
    <TouchableOpacity
     onPress={onPress}
      style={{
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
      }}
    >
      <Text style={styles.textButton}>Ver mais personagens</Text>
    </TouchableOpacity>
  );
}
const styles = {
  button: {
    alignItems: "center",
    marginVertical: 20,
  },
  textButton: {
    color: "#4089af",
    fontWeight: "bold",
  },
};
