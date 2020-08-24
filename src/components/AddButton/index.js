import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function AddButton({ onGoBack }) {
	const navigation = useNavigation();

	const onClickButton = () => {
		navigation.navigate('AddMemo', { onGoBack });
	};

	return (
		<TouchableWithoutFeedback onPress={onClickButton}>
			<View style={styles.container}>
				<Text>+</Text>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'absolute',
		bottom: 50,
		right: 20,
		width: 50,
		height: 50,
		backgroundColor: 'blue',
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

export default AddButton;
