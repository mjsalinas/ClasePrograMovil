import { View, Text } from "react-native";

export default function Home({ navigation, route }: any) {
const {email, password } = route.params;
//const {password} = route.params;

    return(
        <View>
            <Text>Bienvenido: {email}</Text>
            </View>

    )
}