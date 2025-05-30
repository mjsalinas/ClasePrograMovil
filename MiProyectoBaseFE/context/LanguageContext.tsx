import { createContext, useContext, useEffect, useState } from "react";
import {I18n} from "i18n-js";
import AsyncStorage from "@react-native-async-storage/async-storage";
type Language = "es" | "en";

interface LanguageContextProps {
    language: Language;
    changeLanguage: (lng: Language) => void
}

const translations = {
  es: {
    welcome: "Bienvenido",
    settings: "Configuraciones",
    profile: "Perfil",
    login: "Inicia Sesión"
  },
  en: {
    welcome: "Welcome",
    settings: "Settings",
    profile: "Profile",
    login: "Log In"
  },
  de: {
    welcome: "Willkommen",
    settings: "Einstellungen",
    profile: "Profil",
    login: "Anmelden"
  },
  fr: {
    welcome: "Bienvenue",
    settings: "Paramètres",
    profile: "Profil",
    login: "Connexion"
  },
  zh: {
    welcome: "欢迎",
    settings: "设置",
    profile: "个人资料",
    login: "登录"
  }
};

const i18n = new I18n(translations); 
i18n.defaultLocale = "es";
i18n.enableFallback = true;

const LanguageContext = createContext<LanguageContextProps | null>(null);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider")
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<Language>("en");

    useEffect (()=>{
        const loadLanguage = async () => {
            const storedLanguage = await AsyncStorage.getItem("language")
            if (storedLanguage) {
                setLanguage(storedLanguage as Language);
                i18n.locale = storedLanguage;
            }else {
                setLanguage(i18n.defaultLocale as Language);
                i18n.locale = i18n.defaultLocale; 
            }
        };
        loadLanguage()
    }, [])


    const changeLanguage = async (lang: Language) => {
        setLanguage(lang);
        i18n.locale = lang;
        await AsyncStorage.setItem("language", lang);
    };

    return (
        <LanguageContext.Provider value={{language, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}
