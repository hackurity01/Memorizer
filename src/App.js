import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import Header from './components/Header';
import ItemList from './components/ItemList';

const App = () => {
	return (
		<SafeAreaView>
			<Header />
			<ItemList
				itemList={[
					{
						title: 'tittitiitle',
						description: 'descriptsdf sdfs dffiondasd sdfsdfs escription description description descriptiondescription'
					}
				]}
			/>
			{/* <AddButton postMemo="postMemo" /> */}
		</SafeAreaView>
	);
};

export default App;
