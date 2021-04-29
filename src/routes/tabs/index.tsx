import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../../screens/HomeScreen';
import RepoScreen from '../../screens/RepoScreen';
import SeguidoresScreen from '../../screens/SeguidoresScreen';
import SeguindoScreen from '../../screens/SeguindoScreen';

const HomeStack = createStackNavigator();

export function HomeNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ }}
      />
    </HomeStack.Navigator>
  );
}

const ReposStack = createStackNavigator();

export function RepoNavigator() {
  return (
    <ReposStack.Navigator>
      <ReposStack.Screen
        name="RepoScreen"
        component={RepoScreen}
        options={{  }}
      />
    </ReposStack.Navigator>
  );
}

const SeguidoresStack = createStackNavigator();

export function SeguidoresNavigator() {
  return (
    <SeguidoresStack.Navigator>
      <SeguidoresStack.Screen
        name="SeguidoresScreen"
        component={SeguidoresScreen}
        options={{}}
      />
    </SeguidoresStack.Navigator>
  );
}

const SeguindoStack = createStackNavigator();

export function SeguindoNavigator() {
  return (
    <SeguindoStack.Navigator>
      <SeguindoStack.Screen
        name="SeguindoScreen"
        component={SeguindoScreen}
        options={{ }}
      />
    </SeguindoStack.Navigator>
  );
}


// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab