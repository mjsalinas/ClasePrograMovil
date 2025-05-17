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
                    required={false} />

                <CustomInput
                    label="Contraseña"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    required={true} />


                <CustomButton
                    title="Ingresar"
                    onPress={() => {
                        navigation.navigate('HomeScreen',
                            { email, password })
                    }}
                    variant="primary" />

                <CustomButton
                    title="Registrarse"
                    onPress={() => {
                        navigation.navigate('HomeScreen',
                            { email, password })
                    }}
                    variant="secondary" />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 24,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#161640',
    },
    backgroundCard: {
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 40,
        paddingTop: 60,
        paddingBottom: 60,
        width: '70%',
        height: '80%',
    }

})
