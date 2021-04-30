import * as React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { HomeNavigator, RepoNavigator, SeguidoresNavigator, SeguindoNavigator } from './tabs'; 

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style:{
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16
        },
        activeTintColor: 'black' 
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Repo"
        component={RepoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="github" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Seguidores"
        component={SeguidoresNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="team" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Seguindo"
        component={SeguindoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="team" color={color} />,
        }}
      />
      
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof AntDesign>['name']; color: string }) {
  return <AntDesign size={30} style={{ marginBottom: -3 }} {...props} />;
}

