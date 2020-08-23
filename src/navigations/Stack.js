import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainView from '../views/MainView';
import AddMemoView from '../views/AddMemoView';

const Stack = createStackNavigator();

function StackNavigation() {
	return (
		<Stack.Navigator screenOptions={{ gestureEnabled: false }} headerMode={'none'}>
			<Stack.Screen name="Main" component={MainView} />
			<Stack.Screen name="AddMemo" component={AddMemoView} />
		</Stack.Navigator>
	);
}

export default StackNavigation;
