import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

function Header() {
	const [ isPushOn, setIsPushOn ] = useState(false);
	const toggleSwitch = () => setIsPushOn((previousState) => !previousState);

	return (
		<View style={styles.container}>
			<View style={styles.logo}>
				<Text>Memorizer</Text>
			</View>
			<View>
				<Switch
					style={styles.switch}
					trackColor={{ false: '#767577', true: '#81b0ff' }}
					thumbColor={isPushOn ? '#f5dd4b' : '#f4f3f4'}
					ios_backgroundColor="#3e3e3e"
					onValueChange={toggleSwitch}
					value={isPushOn}
				/>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	logo: {},
	switch: {}
});

export default Header;
