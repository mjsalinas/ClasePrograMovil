import { View, Text } from "react-native";

type Props = {
    email: string;
}

export default function Profile ({email}: Props ) {

    return (
        <View>
           <Text>
           Bienvenido {email} a tu perfil
           </Text>
        </View>
    )
}
