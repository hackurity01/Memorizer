import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

import Stack from './navigations/Stack';

const App = () => {
	return (
		<NavigationContainer>
			<Stack />
		</NavigationContainer>
	);
};

export default App;
