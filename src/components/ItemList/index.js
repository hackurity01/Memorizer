import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';

function ItemList({ itemList }) {
	return (
		<View>
			{itemList.map((item) => (
				<View>
					<TouchableOpacity
						onPress={() => {
							console.log(1);
						}}
					>
						<View>
							<Text>{item.title}</Text>
						</View>
					</TouchableOpacity>
					<View>
						<Text>{item.description}</Text>
					</View>
				</View>
			))}
		</View>
	);
}

export default ItemList;
