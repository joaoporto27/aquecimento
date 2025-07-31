import React from "react";
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, Link } from "react-native";
import Card from "../components/Card";
import Button from "../components/Button";

export default function TabScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.main}>
            <Card
                image="https://p2.trrsf.com/image/fget/cf/800/600/images.terra.com/2024/09/08/389527882-pedro-pascal-as-reed-richards-mr-fantastic-fan-montage-2-1-1.jpg"
                name="Sr. Fantástico"
                description="O Senhor Fantástico, cujo nome verdadeiro é Reed Richards, é um super-herói da Marvel Comics e líder do Quarteto Fantástico. Ele é conhecido por sua habilidade de esticar seu corpo de várias maneiras, resultado de uma exposição a raios cósmicos. Além de sua elasticidade, Reed é um gênio científico, com profundo conhecimento em diversas áreas da ciência e tecnologia, o que o torna um dos homens mais inteligentes do universo Marvel. "
            />
        </View>    
        <View style={styles.button}>
            <Button
                onPress={() => navigation.navigate('Tab2')}
            />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = {
    container: {
        flex: 1,
        width: "100%",
        height: "100vh",
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
