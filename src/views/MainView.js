import React, { useState, useEffect, useCallback } from 'react';
import { SafeAreaView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../components/Header';
import ItemList from '../components/ItemList';
import AddButton from '../components/AddButton';
import { getData, storeData } from '~/lib/asyncStore';

function MainView() {
	const navigation = useNavigation();
	const [ memoList, setMemoList ] = useState([]);

	console.log('render', memoList);

	const getMomo = useCallback(
		() => {
			getData('memoList').then((data) => {
				console.log('getMomo', data);
				setMemoList(JSON.parse(data) || []);
			});
		},
		[ setMemoList ]
	);

	useEffect(() => {
		getMomo();
	}, []);

	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Header />
			<ItemList itemList={memoList} />
			<AddButton
				onGoBack={() => {
					getMomo();
				}}
			/>
		</SafeAreaView>
	);
}

export default MainView;
