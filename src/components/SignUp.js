import React from 'react';
import { Text, View, StyleSheet, Button, TextInput } from 'react-native';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            screenname: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        let baseUrl = "http://172.17.0.117:4200/user/signup"
        fetch(baseUrl, {
            method: 'POST', 
            headers: {
                Accept: 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ user: this.state}),
        }).then(
                function signupSuccess(response) {
                    console.log(response);
                },

                function signupError(err) {
                    console.log(err);
                }
            )
    }

    render() {
        return(
            <View>
            <TextInput
                onChangeText = {(text) => this.setState({ name : text })}
                placeholder= {'Name'} />
            <TextInput
            onChangeText = {(text) => this.setState({ screenname : text })}
            placeholder= {'Screenname'} />
            <TextInput
            onChangeText = {(text) => this.setState({ email : text })}
                placeholder= {'Email'} />
            <TextInput
            onChangeText = {(text) => this.setState({ password : text })}
                secureTextEntry = {true}
                placeholder= {'Password'} />
            <Button
            onPress={() => this.handleSubmit()}
            title="sign me up!" />
        </View>
        )
    }
}

const styles = StyleSheet.create({

})