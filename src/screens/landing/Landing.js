import React from 'react';
import { Text, View, StyleSheet, TouchableHighlight } from 'react-native';
import SignIn from '../../components/SignIn.js';
import SignUp from '../../components/SignUp.js';

export default class Landing extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text style={styles.text}>Welcome to resource buddy</Text>
                    <Text style={styles.text}>Sign up and lets get started!</Text>

                    {/* <SignIn /> */}
                    <SignUp />
                </View>
                    <Text style={styles.clickableText}>Wait! I did that already!</Text>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        paddingTop: 10
    },

    text: {
        alignSelf: 'center'
    },

    clickableText: {
        marginTop: 10,
        alignSelf: 'center'
    }
})