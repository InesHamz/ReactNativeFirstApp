import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, AlertIOS, AsyncStorage, ImageBackground } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
//import HomeTabScreen from "./src/screens/HomeTabScreen";
//import { AuthenticationService } from './src/services/AuthenticationService';



export default class LoginScreen extends Component{

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '' 
        }
    }

    _setIsLoggedIn = async () => {
        await AsyncStorage.setItem('loggedIn', 'loggedIn');
        await AsyncStorage.setItem('email', this.state.email);
        await AsyncStorage.setItem('password', this.state.password);
    }

    _handleEmail = (text) => {
        this.setState({ email: text })
     }

     _handlePassword = (text) => {
        this.setState({ password: text })
     }

    _onLoginPress = (email, password) => {

        if (email.length == 0){
            AlertIOS.alert('Enter email first!!!');
            return;
        }

        if (password.length < 6){
            AlertIOS.alert('Password too short, enter minimum 6 characters!');
            return;
        }

        try {
            this._setIsLoggedIn();
            this.props.navigation.navigate('HomeTab');
        } catch (error){
            console.log(error);
        }
    }

    _onPressGoback = () => {
        this.props.navigation.goBack();
    }

    render(){
        return(
            <View style = {styles.container} >
                <ImageBackground source={require('../assests/images/businesswoman.jpg')} style={{flex: 1, width: null, height: null, resizeMode: 'cover'}}> 


                    <Text style = {styles.title} >Login</Text>

                        <TextInput
                            returnKeyType = 'done'
                            autoCorrect = {false}
                            autoCapitalize = 'none'
                            blurOnSubmit = {true}
                            onChangeText = {this._handleEmail}
                            style = {styles.inputs}
                            keyboardType = 'email-address'
                            placeholder = 'Username' />

                        <TextInput
                            returnKeyType = 'done'
                            blurOnSubmit = {true}
                            onChangeText = {this._handlePassword}
                            style = {styles.inputs}
                            secureTextEntry = {true}
                            placeholder = 'Password' />

                        <TouchableOpacity 
                                onPress = {() => this._onLoginPress(this.state.email, this.state.password)}
                                style = {styles.loginContainer} >
                                <Text style = {styles.buttonText} >LOGIN</Text>
                        </TouchableOpacity>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f49651'
        //backgroundImage: {
            //flex: 1,
            //width: null,
            //height: null,
            //resizeMode: 'cover', 
         // }
    }, subContainer: {
        alignSelf: 'stretch'
    }, inputs: {
        alignSelf: 'stretch',
        padding: 12,
        paddingLeft: 22,
        paddingRight: 22,
        marginRight: 32,
        marginLeft: 32,
        backgroundColor: 'white',
        borderRadius: 22,
        marginBottom: 8,
    }, loginContainer: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        padding: 13,
        borderRadius: 22,
        marginRight: 32,
        marginLeft: 32
    }, buttonText: {
        alignSelf: 'center',
        fontSize: 12,
        fontWeight: 'bold'
    }, title: {
        color: '#f49651',
        fontWeight: 'bold',
        fontSize: 32,
        marginLeft: 32,
        marginTop: 140,
        marginBottom: 22
    }
});