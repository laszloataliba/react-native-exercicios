import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

import Simples from './componentes/Simples.js';
import ParImpar from './componentes/ParImpar.js';
import { Inverter, MegaSena } from './componentes/Multi.js';

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				{/* <Text style={styles.f40}>
					App Teste
				</Text> */}
				<Simples texto='Texto(Arrow function)' />
				<ParImpar numero={18} />
				<Inverter texto='react-native' />
				<MegaSena numeros={7} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	f40: {
		fontSize: 40
	}
});


