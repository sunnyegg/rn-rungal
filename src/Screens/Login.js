import React from 'react';
import Axios from 'axios';

import {
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
} from 'react-native';

import {
  Form,
  Card,
  CardItem,
  Item,
  Input,
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Label,
  View,
} from 'native-base';

import {Col, Row, Grid} from 'react-native-easy-grid';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            textAlign: 'center',
            marginTop: 50,
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          Welcome to
        </Text>
      </View>
      <View style={styles.Body}>
        {/*<View style={styles.Body}>*/}
        <Text
          style={{
            textAlign: 'center',
            marginBottom: 50,
            fontSize: 34,
            fontWeight: 'bold',
          }}>
          RUNGAL APP
        </Text>
        <Item style={styles.InputStyle} rounded last>
          <Input placeholder="Username" />
        </Item>
        <Item style={styles.InputStyle} rounded last>
          <Input placeholder="Password" secureTextEntry={true} />
        </Item>
        <Button
          style={styles.ButtonLogin}
          onPress={() => navigation.navigate('Home')}>
          <Text>LOGIN</Text>
        </Button>
        {/*</View>*/}
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
    padding: 20,
    backgroundColor: '#ef5777',
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
  },
});

export default Login;
