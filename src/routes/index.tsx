/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { isLoading } from 'expo-font';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import { useUser } from '../context/userContext';
import AppNavigator from './app.routes';
import AuthNavigador from './auth.routes';

 // import LinkingConfiguration from './LinkingConfiguration';
 
const SHOW_AUTH = true;

export default function Routes({ colorScheme }: { colorScheme: ColorSchemeName }) {
    
    const user = useUser();

    //isLoading is to prevent react state on unmounted component 
    if(!user.logged || user.isLoading){
        return(
            <NavigationContainer
                theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
            >
                <AuthNavigador />
            </NavigationContainer>
        );
    }

    return (
        <NavigationContainer
            theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
        >
            <AppNavigator />
        </NavigationContainer>
    );
}

 