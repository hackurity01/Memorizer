import React, { useState, useRef, useEffect } from 'react';

import { View, TouchableOpacity, StyleSheet, Text, Animated } from 'react-native';

function Item({ title, description }) {
	const [ isMeasured, setIsMeasured ] = useState(false);
	const [ descriptionHeight ] = useState(new Animated.Value(0));
	const originHeight = useRef(0);
	const clonedDescriptionRef = useRef(null);

	if (Platform.OS === 'android') {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}

	onClickTitle = () => {
		console.log(descriptionHeight);
		let toValue;

		if (descriptionHeight._value) {
			toValue = 0;
		} else {
			toValue = originHeight.current;
		}

		Animated.timing(descriptionHeight, {
			toValue,
			duration: 300,
			useNativeDriver: false
		}).start();
	};

	function getContentHeight() {
		if (clonedDescriptionRef && !isMeasured) {
			clonedDescriptionRef.current.measure((ox, oy, width, height, px, py) => {
				originHeight.current = height + 1;
				setIsMeasured(true);
			});
		}
	}

	useEffect(() => {
		requestAnimationFrame(getContentHeight);
	}, []);

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={onClickTitle}>
				<View style={styles.title}>
					<Text>{title}</Text>
				</View>
			</TouchableOpacity>
			<View>
				<Animated.View style={[ styles.description, { height: descriptionHeight } ]}>
					<Text style={styles.descriptionText}>{description}</Text>
				</Animated.View>
			</View>
			{!isMeasured && (
				<View style={styles.transparentClone} ref={clonedDescriptionRef}>
					<Text>{description}</Text>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		borderBottomWidth: 1,
		borderBottomColor: '#dddddd'
	},
	title: {
		paddingTop: 12,
		paddingRight: 24,
		paddingBottom: 12,
		paddingLeft: 24
	},
	description: {
		width: '100%',
		overflow: 'hidden',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	descriptionText: {
		paddingTop: 0,
		paddingRight: 42,
		paddingBottom: 12,
		paddingLeft: 24,
		color: 'rgba(0, 0, 0, 0.54)'
	},
	transparentClone: {
		paddingTop: 0,
		paddingRight: 42,
		paddingBottom: 12,
		paddingLeft: 24,

		width: '100%',
		transform: [ { scaleX: 0 } ],
		opacity: 0,
		position: 'absolute'
	}
});

export default Item;
