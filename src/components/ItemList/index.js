import React, { useState } from 'react';
import { View, Switch, StyleSheet, Text } from 'react-native';

function Header() {
	const [ isPushOn, setIsPushOn ] = useState(false);
	const toggleSwitch = () => setIsPushOn((previousState) => !previousState);

	return <View style={styles.container} />;
}

const styles = StyleSheet.create({
	container: {},
	logo: {},
	switch: {}
});

export default Header;
