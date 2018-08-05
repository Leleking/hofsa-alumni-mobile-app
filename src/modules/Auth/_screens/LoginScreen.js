import React from 'react';
import {StatusBar, StyleSheet, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, View, LayoutAnimation, Image} from 'react-native';

import {LoginForm} from '../_components';

const LOGO = require('../../../../assets/hofsa-alumni.png');

class LoginScreen extends React.Component {
    componentDidMount() {
        StatusBar.setBarStyle('dark-content', true);
    }

    componentDidUpdate() {
        LayoutAnimation.spring();
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.innerContainer}>
                        <Image source={LOGO} resizeMode="contain" style={{height: 180, width: 175, alignSelf: 'center'}} />
                        <LoginForm navigation={this.props.navigation} />
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    innerContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-evenly'
    }
});

export default LoginScreen;