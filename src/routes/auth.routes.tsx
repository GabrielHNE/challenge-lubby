//Authentication routes
import React from 'react';
import Auth from '../screens/AuthScreen';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

export default function AuthNavigator(props: any){

	return(
		<AuthStack.Navigator screenOptions={{ headerShown: false }}>
			<AuthStack.Screen name="Auth" component={Auth} />
		</AuthStack.Navigator>
	);
};
