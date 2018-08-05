import React from 'react';
import {StatusBar, StyleSheet, View, Text, Image, LayoutAnimation} from 'react-native';

import Colors from '../../../constants/Colors';

const LOGO = require('../../../../assets/hofsa-alumni.png');

class WelcomeScreen extends React.Component {
	componentDidMount() {
		StatusBar.setBarStyle('light-content');

	}

	timeout = () => setTimeout(() => {
		this.props.navigation.navigate('LoginScreen');
	}, 3000);

	componentDidUpdate() {
		LayoutAnimation.spring();
	}

	componentWillUnmount() {
		clearTimeout(this.timeout);
	}

	render() {
		return (
			<View style={styles.container}>
				<Image source={LOGO} resizeMode="contain" style={{height: 250, width: 240, alignSelf: 'center'}} onLoad={this.timeout} />
				<Text style={{color: '#FFF', fontWeight: 'bold', fontSize: 50}}>Hofsa Alumni</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.secondary,
		alignItems: 'center',
		justifyContent: 'center'
	},
	welcome: {
		fontSize: 30,
		color: '#CCC',
		fontWeight: 'bold',
		textAlign: 'center',
		margin: 20
	}
});

export default WelcomeScreen;
