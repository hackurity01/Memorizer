import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import MainView from '../views/MainView';
import AddMemoView from '../views/AddMemoView';

const Stack = createStackNavigator();

function StackNavigation() {
	return (
		<Stack.Navigator
			screenOptions={{ gestureEnabled: false, cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS }}
			headerMode={'none'}
		>
			<Stack.Screen name="Main" component={MainView} />
			<Stack.Screen name="AddMemo" component={AddMemoView} />
		</Stack.Navigator>
	);
}

export default StackNavigation;
