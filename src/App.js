import React, { useEffect } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import notification from './lib/notification';

import Stack from './navigations/Stack';

const App = () => {
	useEffect(() => {
		notification.register();
		return () => {
			notification.unregister();
		};
	}, []);

	return (
		<NavigationContainer>
			<Stack />
		</NavigationContainer>
	);
};

export default App;
