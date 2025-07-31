import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import Button from "../components/Button";

export default function TabScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.main}>
          <Card
            image="https://classic.exame.com/wp-content/uploads/2016/09/size_960_16_9_quarteto-fantastico3.jpg"
            name="O Quarteto Fantástico"
            description="O Quarteto Fantástico é um grupo de super-heróis da Marvel Comics, conhecido por suas aventuras e lutas contra ameaças tanto na Terra quanto no espaço. O grupo é composto por quatro membros principais: Reed Richards (Senhor Fantástico), Sue Storm (Mulher Invisível), Johnny Storm (Tocha Humana) e Ben Grimm (O Coisa). Eles ganharam seus poderes após serem expostos a radiação cósmica durante um voo experimental."
            />
        </View>
        <View style={styles.button}>
          <Button onPress={() => navigation.navigate("Contact")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#4089af",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    alignItems: "center",
    marginVertical: 20,
  },
};
