import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { UserProvider } from './src/context/userContext';
import useCachedResources from './src/hooks/useCachedResources';
import useColorScheme from './src/hooks/useColorScheme';
import Routes from './src/routes';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }else {
    return (
      <SafeAreaProvider>
        <UserProvider>
          <StatusBar />
          <Routes colorScheme={colorScheme} />
        </UserProvider>
      </SafeAreaProvider>
    );
  }
}
