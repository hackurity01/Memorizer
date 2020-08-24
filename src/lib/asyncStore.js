import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (e) {
		console.log('storeData Error');
		// saving error
	}
};

export const getData = async (key) => {
	try {
		return await AsyncStorage.getItem(key);
	} catch (e) {
		console.log('getData Error');
		// read error
	}
};
