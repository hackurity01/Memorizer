import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import Header from './components/Header';

const App = () => {
	return (
		<PaperProvider>
			<SafeAreaView>
				<Header />
				{/* <ItemList memos="memos" :deleteMemo="deleteMemo"/>
      <AddButton postMemo="postMemo"/> */}
			</SafeAreaView>
		</PaperProvider>
	);
};

export default App;
