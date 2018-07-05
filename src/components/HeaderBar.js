import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class HeaderBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title}><Text style={styles.title.color}>ResourceBuddy</Text></View>
            </View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        paddingTop: Expo.Constants.statusBarHeight,
        backgroundColor: 'purple',
        height: 50
    },

    title: {
        alignSelf: 'center'
    }
})