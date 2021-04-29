/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import AppNavigator from './app.routes';
import AuthNavigador from './auth.routes';

 // import LinkingConfiguration from './LinkingConfiguration';
 
const SHOW_AUTH = true;

export default function Routes({ colorScheme }: { colorScheme: ColorSchemeName }) {
    
    if(SHOW_AUTH){
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

 