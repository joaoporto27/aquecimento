import React from "react";
import { Image, Text, View} from "react-native";

export default function Card({ image, name, description }) {
    return (
        <View style={styles.container}>
        <Image
            style={styles.image}
            source={{
                uri: image
            }}
        />
        <Text style={styles.name}>
            {name}
        </Text>
        <Text style={styles.description}>
            {description}
        </Text>
    </View>
    )
}

const styles = {
    container: {
        alignItems: 'center',
    },
    image: {
        width: 170,
        height: 150,
        marginLeft: 10,
        marginBottom: 15,
        borderRadius: 90,
    },
    name: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        paddingHorizontal: 10,
        marginBottom: 20,
    }
}