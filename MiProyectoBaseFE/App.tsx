import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import TabsScreen from './screens/tabs/TabsScreen';
import { AuthProvider } from './context/AuthContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import RegisterBookScreen from './screens/books/RegisterBook';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <ThemeProvider>
    <AuthProvider>
      <LanguageProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomeScreen" component={Home} />
            <Stack.Screen name="RegisterBook" component={RegisterBookScreen} />
            <Stack.Screen name="Tabs" component={TabsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </LanguageProvider>
    </AuthProvider>
    </ThemeProvider>

  );
}
