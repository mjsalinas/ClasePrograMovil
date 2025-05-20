import { MaterialIcons } from "@expo/vector-icons";
import { Button, TouchableOpacity, View, Text, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import React, { useState } from "react";
import CustomButton from "../components/CustomButton";

export default function Login({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.backgroundCard}>
                <Text style={styles.title}>Iniciar Sesión</Text>

                <CustomInput
                    label="Correo"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    required={false}
                />

                <CustomInput
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    required={true}
                />

                <CustomButton
                    title="Ingresar"
                    onPress={() => {
                        navigation.navigate('HomeScreen', { email, password });
                    }}
                    variant="primary"
                />

                <CustomButton
                    title="Registrarse"
                    onPress={() => {
                        navigation.navigate('HomeScreen', { email, password });
                    }}
                    variant="tertiary"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E1E2C', // Fondo oscuro moderno
        padding: 20,
    },
    backgroundCard: {
        backgroundColor: '#FFFFFF', // Fondo blanco para contraste
        borderRadius: 15, // Bordes más redondeados
        padding: 30,
        width: '85%',
        shadowColor: '#000', // Sombra para dar profundidad
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8, // Sombra en Android
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 28, // Tamaño más grande
        color: '#333', // Color oscuro para contraste
        marginBottom: 20, // Espaciado inferior
    },
    inputSpacing: {
        marginBottom: 15, // Espaciado entre inputs
    },
});
