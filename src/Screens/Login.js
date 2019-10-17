import React, { useState } from 'react';
import Axios from 'axios';

import {
  StyleSheet,
  Image,
  AsyncStorage,
  ToastAndroid
} from 'react-native';

import {
  Item,
  Input,
  Header,
  Button,
  Text,
  View,
} from 'native-base';

import LoginImage from '../Assets/Img/login.png';

const Login = ({ navigation }) => {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  async function submitLogin() {
    try {
      const loginResult = await Axios.post(
        'http://192.168.0.106:3333/api/v1/login',
        {
          user: Username,
          password: Password,
        },
      );
      if (loginResult.status === 200) {
        AsyncStorage.setItem('keyToken', `Bearer: ${loginResult.data.token}`);
        ToastAndroid.show('Login Success!', ToastAndroid.SHORT)
        return navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show('Login Failed! Username/Password is invalid!', ToastAndroid.SHORT)
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Header androidStatusBarColor={'#ef5777'} style={{ display: 'none' }} />
      <View style={{ flex: 2 }}>
        <Image source={LoginImage} style={{ height: 300, width: null }} />
      </View>
      <View style={styles.Body}>
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 50,
            fontSize: 34,
            fontWeight: 'bold',
            color: '#ef5777',
          }}>
          Login
        </Text>
        <Item style={styles.InputStyle} rounded last>
          <Input
            placeholder="Username"
            onChangeText={text => setUsername(text)}
            value={Username}
          />
        </Item>
        <Item style={styles.InputStyle} rounded last>
          <Input
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={text => setPassword(text)}
            value={Password}
          />
        </Item>
        <Button style={styles.ButtonLogin} onPress={() => submitLogin()}>
          <Text>LOGIN</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderStyle: {
    display: 'none',
    backgroundColor: '#ef5777',
  },
  Body: {
    flex: 3,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginHorizontal: -5,
    marginBottom: -5,
    padding: 20,
    backgroundColor: 'white',
    borderColor: '#ef5777',
    borderWidth: 2,
  },
  InputStyle: {
    paddingLeft: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  ButtonLogin: {
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 25,
    backgroundColor: '#ef5777',
  },
});

export default Login;
