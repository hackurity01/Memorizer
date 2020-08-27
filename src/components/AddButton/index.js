import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

Icon.loadFont();

function AddButton({ onGoBack }) {
	const navigation = useNavigation();

	const onClickButton = () => {
		navigation.navigate('AddMemo', { onGoBack });
	};

	return (
		<TouchableWithoutFeedback onPress={onClickButton}>
			<View style={styles.container}>
				<Icon name="plus" size={20} color="#222" />
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
		backgroundColor: '#fff',
		borderRadius: 100,
		justifyContent: 'center',
		alignItems: 'center',

		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 1
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 2
	}
});

export default AddButton;
