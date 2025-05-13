import { MaterialIcons } from "@expo/vector-icons";
import { Button, TouchableOpacity, View, Text } from "react-native";
import CustomInput from "../components/CustomInput";
import React, { useState } from "react";


export default function Login({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
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

            <TouchableOpacity onPress={() =>{navigation.navigate('HomeScreen', 
                { email, password })}}>
                <Text>Ingresar</Text>
            </TouchableOpacity>
        </View>

    )
}