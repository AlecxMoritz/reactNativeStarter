import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            screenname: '',
            password: '',
        }
    }


    render() {
        return(
            <Text>sign in</Text>
        )
    }
}

const styles = StyleSheet.create({
    
})