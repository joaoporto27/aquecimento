import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import Card from "../components/Card";
import Button from "../components/Button";
import { Skeleton } from "moti/skeleton";

export default function Tab2({ navigation }) {
  const [loading, setLoading] = useState(true);

  // Simula carregamento (exemplo: 2 segundos)
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.main}>
          {loading ? (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center", gap: 20 }}>
              <Skeleton width={170} height={150} radius="round" colorMode="light" style={{ marginTop: 30 }} />
              <Skeleton width={250} height={40} radius={8} colorMode="light" style={{ marginTop: 10 }} />
              <Skeleton width={300} height={80} radius={8} colorMode="light" style={{ marginTop: 10 }} />
              <Skeleton width={170} height={150} radius="round" colorMode="light" style={{ marginTop: 30 }} />
              <Skeleton width={250} height={40} radius={8} colorMode="light" style={{ marginTop: 10 }} />
              <Skeleton width={300} height={80} radius={8} colorMode="light" style={{ marginTop: 10 }} />
            </View>
          ) : (
            <>
              <Card
                image="https://p2.trrsf.com/image/fget/cf/800/600/images.terra.com/2024/09/08/389527882-pedro-pascal-as-reed-richards-mr-fantastic-fan-montage-2-1-1.jpg"
                name="Sr. Fantástico"
                description="O Senhor Fantástico, cujo nome verdadeiro é Reed Richards, é um super-herói da Marvel Comics e líder do Quarteto Fantástico. Ele é conhecido por sua habilidade de esticar seu corpo de várias maneiras, resultado de uma exposição a raios cósmicos. Além de sua elasticidade, Reed é um gênio científico, com profundo conhecimento em diversas áreas da ciência e tecnologia, o que o torna um dos homens mais inteligentes do universo Marvel. "
              />
              <Card
                image="https://ovicio.com.br/wp-content/uploads/2025/07/20250728-ovicio-quarteto-fantastico-sue-555x555.jpg"
                name="Sue Storm"
                description="Susan SueStorm Richards, mais conhecida como Mulher Invisível, é uma integrante fundamental do Quarteto Fantástico. Ela tem a habilidade de se tornar invisível e de criar campos de força invisíveis, sendo capaz de usá-los tanto defensivamente quanto ofensivamente. Além de suas habilidades sobre-humanas, Sue é uma figura materna e unificadora para a equipe, demonstrando grande inteligência e liderança. "
              />
              <Card
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIq_pWs31YW1lEg8SyinL79Vya6JDvYRGYUw&s"
                name="Tocha Humana"
                description="O Tocha Humana, também conhecido como Johnny Storm, é um super-herói da Marvel Comics com a habilidade de gerar e controlar chamas, além de poder voar. Ele é um membro do Quarteto Fantástico, e sua capacidade de se transformar em fogo é acompanhada de uma personalidade impulsiva e aventureira."
              />
              <Card
                image="https://6vezes7.com.br/wp-content/uploads/2025/02/arte-blog-41-1024x576.png"
                name="O Coisa"
                description="O Coisa é um personagem do universo Marvel, membro do Quarteto Fantástico, cujo nome verdadeiro é Benjamin Jacob Grimm. Ele é conhecido por sua aparência rochosa e força sobre-humana, resultado de exposição a raios cósmicos. "
              />
            </>
          )}
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
