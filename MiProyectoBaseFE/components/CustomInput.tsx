import {Ionicons, MaterialIcons} from "@expo/vector-icons";
import React, { useState } from "react";
import {
    View, Text, TextInput, KeyboardTypeOptions,
    StyleSheet,
    TouchableOpacity
} from "react-native";

type Props = {
    label: string;
    value: string;
    type?: 'text' | 'password' | 'email' | 'number';
    onChange: (text: string) => void;
    required: boolean;
}

export default function CustomInput({ label, value, type = "text", onChange, required }: Props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isSecureText, setIsSecureText] = useState(type === 'password');

    const isPasswordField = type === 'password';
    
    const keyboardType: KeyboardTypeOptions =
        /*Flujos de control: operador ternario: */
        type === 'email' ? 'email-address' :
            type === 'number' ? 'numeric'
                : 'default';

    const icon =
        type === 'email' ? 'email' :
        type === 'password' ? 'lock' : 'text-fields';    
        
        
    const getError = () => {
        if (required && !value) return 'Este campo es obligatorio';
        /* evaluar si correo tiene @*/
        if (type === 'email' && value.includes('@')) return 'Correo invalido';
        /*evaluar minimo de caracteres para contrasena*/
        if (type === 'password' && value.length < 6) return 'Contraseña debe ser mas fuerte';
        return null;
    };
    const error = getError();

    return (
        <View style={styles.wrapper}>
            <View style={error && styles.inputError}>
                <Text>{label}:</Text>
                <MaterialIcons name={icon as any} size={20} color="#555" style={styles.icon} />
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder={label}
                        value={value}
                        onChangeText={onChange}
                        secureTextEntry={isSecureText}
                        keyboardType={keyboardType}
                    />
                    {isPasswordField && (
                        <TouchableOpacity 
                            onPress={()=>{
                                setIsPasswordVisible(!isPasswordVisible);
                                setIsSecureText(!isSecureText);
                                }}>
                        <Ionicons 
                               name={isPasswordVisible ? 'eye-off' : 'eye'}
                               size={20} />
                        </TouchableOpacity>)}
                </View>

            </View>
            {error && <Text>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: { marginBottom: 15 },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    inputError: {
      borderColor: 'red',
    },
    input: {
      flex: 1,
      padding: 10,
    },
    icon: {
      marginRight: 8,
    },
    error: {
      color: 'red',
      fontSize: 12,
    },
})

