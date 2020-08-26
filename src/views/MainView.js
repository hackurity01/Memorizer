import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';
import ItemList from '../components/ItemList';
import AddButton from '../components/AddButton';
import { getData, storeData } from '~/lib/asyncStore';

function MainView() {
	const navigation = useNavigation();
	const [ memoList, setMemoList ] = useState([]);

	const getMemo = useCallback(
		() => {
			getData('memoList').then((data) => {
				setMemoList(JSON.parse(data) || []);
			});
		},
		[ setMemoList ]
	);

	useEffect(() => {
		getMemo();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header />
			<ScrollView>
				<ItemList itemList={memoList} />
			</ScrollView>
			<AddButton
				onGoBack={() => {
					getMemo();
				}}
			/>
		</SafeAreaView>
	);
}

export default MainView;
