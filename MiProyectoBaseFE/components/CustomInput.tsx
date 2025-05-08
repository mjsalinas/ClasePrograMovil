import { View, Text, TextInput, KeyboardTypeOptions, 
    StyleSheet } from "react-native";

type Props = {
   label: string;  
   value: string;
   type?: 'text' | 'password' | 'email' | 'number';
   onChange: (text: string) => void;
   required: boolean;
}

export default function CustomInput({label, value, type="text", onChange, required}: Props) {
    const isSecure = type === 'password';
    const keyboardType: KeyboardTypeOptions =
    /*Flujos de control: operador ternario: */
        type === 'email' ? 'email-address' : 
            type === 'number' ? 'numeric' 
                : 'default';

    const getError = () => {
        if(required && !value) return 'Este campo es obligatorio';
        /* evaluar si correo tiene @*/
        if(type === 'email' && value.includes('@')) return 'Correo invalido';
        /*evaluar minimo de caracteres para contrasena*/
        if(type === 'password' && value.length < 6) return 'Contraseña debe ser mas fuerte'; 
    };     
    const error = getError();

    return(
        <View>
            <Text>{label}:</Text>
            <TextInput
                style = {styles.input}
                placeholder={"Ingresa tu nombre"}
                value={value}
                onChangeText={onChange}
                secureTextEntry = {isSecure}
                keyboardType={keyboardType}
            />
            { <Text>{error}</Text> }
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {marginBottom: 15},
    input:{
        borderWidth: 1,
        borderColor: '#736d6d',
        padding: 10, 
        borderRadius: 5,
    }
})

