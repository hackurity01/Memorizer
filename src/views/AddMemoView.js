import React, { useState } from 'react';
import { View, TouchableHighlight, StyleSheet, TextInput, Text, SafeAreaView, Button } from 'react-native';
import AnimatedInput from 'react-native-animated-input';

import { getData, storeData } from '~/lib/asyncStore';

function AddMemoView({ route, navigation }) {
	const [ title, setTitle ] = useState('');
	const [ memo, setMemo ] = useState('');

	const onClickAddButton = () => {
		getData('memoList').then((data) => {
			const newData = JSON.parse(data) || [];
			newData.push({ title, memo });
			storeData('memoList', JSON.stringify(newData)).then(() => {
				alert('Saved!');
				navigation.goBack();
				route.params.onGoBack();
			});
		});
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.body}>
				<AnimatedInput
					styleLabel={styles.titleLabel}
					styleBodyContent={styles.titleInput}
					onChangeText={(text) => setTitle(text)}
					placeholder="Title"
					value={title}
				/>
				<TextInput
					style={styles.memoInput}
					onChangeText={(text) => setMemo(text)}
					placeholder="Memo"
					value={memo}
					multiline
				/>
				<View style={styles.buttonGroup}>
					<TouchableHighlight
						activeOpacity={0.6}
						underlayColor="#DDDDDD"
						onPress={() => {
							navigation.goBack();
						}}
					>
						<Text style={styles.button}>CANCEL</Text>
					</TouchableHighlight>
					<TouchableHighlight activeOpacity={0.6} underlayColor="#DDDDDD" onPress={onClickAddButton}>
						<Text style={styles.button}>ADD</Text>
					</TouchableHighlight>
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	body: {
		paddingVertical: 40,
		paddingHorizontal: 25
	},
	titleLabel: {
		color: '#555'
	},
	titleInput: {
		borderBottomWidth: 1,
		borderBottomColor: '#999'
	},
	memoInput: {
		borderWidth: 0,
		borderBottomWidth: 1,
		borderColor: '#999',
		fontSize: 15,
		marginBottom: 30,
		paddingVertical: 15,
		minHeight: 120
	},
	buttonGroup: {
		flexDirection: 'row',
		justifyContent: 'space-evenly'
	},
	button: {
		paddingVertical: 15,
		paddingHorizontal: 30,
		borderWidth: 1,
		borderRadius: 5,
		width: 120,
		textAlign: 'center'
	}
});

export default AddMemoView;
