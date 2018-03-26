import React from 'react';
import { StyleSheet, Text, TextInput, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  componentDidMount() {
    this._loadInitialState().done();
  }

  _loadInitialState = async() => {
    var value = await AsyncStorage.getItem('user');
    if (value !== null) {
      this.props.navigation.navigate('Profile');
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior = 'padding' stye={styles.wrapper}>

        <View style = {styles.container}>

          <Text style = {styles.header}>- LOGIN -</Text>

          <TextInput
            style={styles.textInput} placeholder = 'Username'
            onChangeText={ (username) => this.setState({username}) }
            underlineColorAndroid='transparent'
          />
          
          <TextInput
            style={styles.textInput} placeholder = 'Password'
            onChangeText={ (password) => this.setState({password}) }
            underlineColorAndroid='transparent'
          />

          <TouchableOpacity
            style={styles.btn}
            onPress={this.login}>
            <Text>Log in</Text>
          </TouchableOpacity>

        </View>
      </KeyboardAvoidingView>

    );
  }

  login = () => {
    
    fetch('https://192.168.0.1')
  }
}




const styles = StyleSheet.create({
  wrapper: {
    flex:1,
    flexDirection:'column'
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2896d3',
    paddingLeft: 40,
    paddingRight: 40
  },
  header: {
    fontSize: 24,
    marginBottom: 60,
    color: '#fff',
    fontWeight: 'bold'
  },
  textInput: {
    alignSelf: 'stretch',
    padding: 16,
    marginBottom: 20,
    backgroundColor: '#fff'
  },
  btn: {
    alignSelf: 'stretch',
    backgroundColor: '#01C853',
    padding: 20,
    alignItems: 'center'
  }
});

