import React from 'react';
import { SafeAreaView, Button } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';
import ItemList from '../components/ItemList';
import AddButton from '../components/AddButton';

const storeData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (e) {
		// saving error
	}
};

const getData = async (key) => {
	try {
		return await AsyncStorage.getItem(key);
	} catch (e) {
		// read error
	}

	console.log('Done.');
};

function MainView() {
	const navigation = useNavigation();

	// storeData('test', 'test');
	console.log('test');
	getData('test').then((value) => {
		console.log('store: ', value);
	});

	return (
		<SafeAreaView style={{ flex: 1 }}>
			{/* <ScrollView> */}
			<Header />
			<ItemList
				itemList={[
					{
						title: 'tittitiitle',
						description: 'descriptsdf sdfs dffiondasd sdfsdfs escription description description descriptiondescription'
					}
				]}
			/>
			<Button
				title={'sfd'}
				onPress={() => {
					navigation.navigate('AddMemo');
				}}
			/>
			{/* </ScrollView> */}
			<AddButton />
		</SafeAreaView>
	);
}

export default MainView;
