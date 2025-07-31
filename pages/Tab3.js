import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Contact() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contato</Text>
            <TextInput
                style={styles.input}
                placeholder="Seu nome"
                placeholderTextColor="#888"
            />
            <TextInput
                style={styles.input}
                placeholder="Seu e-mail"
                placeholderTextColor="#888"
                keyboardType="email-address"
            />
            <TextInput
                style={[styles.input, { height: 80 }]}
                placeholder="Mensagem"
                placeholderTextColor="#888"
                multiline
            />
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Enviar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#4089af",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
    },
    input: {
        width: "100%",
        maxWidth: 350,
        backgroundColor: "#fff",
        borderRadius: 8,
        padding: 10,
        marginBottom: 15,
        fontSize: 16,
    },
    button: {
        backgroundColor: "#fff",
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 40,
        marginTop: 10,
    },
    buttonText: {
        color: "#4089af",
        fontWeight: "bold",
        fontSize: 18,
    },
};