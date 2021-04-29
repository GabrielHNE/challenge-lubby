//Authentication routes
import React from 'react';
import Auth from '../../screens/AuthScreen';

import { createStackNavigator } from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = (props: any) => (
	<AuthStack.Navigator screenOptions={{ headerShown: false }}>
		<AuthStack.Screen name="Auth" component={Auth} />
	</AuthStack.Navigator>
);

export default AuthRoutes;
