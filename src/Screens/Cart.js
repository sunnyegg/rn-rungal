import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getHome} from '../Public/Redux/Actions/Home';

import Axios from 'axios';
import Rupiah from 'rupiah-format';

import Login from './Login';

import {StyleSheet, Image, SafeAreaView, View, FlatList} from 'react-native';

import {ScrollView} from 'react-native-gesture-handler';

import {
  Badge,
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
  Tabs,
  Tab,
  TabHeading,
  Segment,
  List,
  ListItem,
  Thumbnail,
} from 'native-base';

const Cart = ({navigation}) => {
  return (
    <>
      <Header
        androidStatusBarColor={'#ef5777'}
        style={{backgroundColor: '#ef5777'}}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Checkout Products</Title>
        </Body>
      </Header>
      <View>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{uri: 'Image URL'}} />
            </Left>
            <Body>
              <Text>Sankhadeep</Text>
              <Text note numberOfLines={1}>
                Its time to build a difference . .
              </Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
          <Button>
            <Text>Checkout</Text>
          </Button>
        </List>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Parent: {
    flex: 1,
    backgroundColor: '#ef5777',
  },

  Title: {
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },

  Body: {
    flex: 2,
    borderTopLeftRadius: 20,
    marginTop: 15,
    backgroundColor: 'white',
  },

  ColProduct: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
    // justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  ItemSearch: {
    width: '80%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  ImageProduct: {
    height: 170,
    width: '100%',
    alignSelf: 'center',
    borderTopLeftRadius: 15,
  },
  CardProduct: {
    alignSelf: 'center',
    width: 350,
    borderColor: 'white',
    elevation: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  BottomNav: {
    backgroundColor: '#ef5777',
  },
  IconColor: {
    color: 'white',
  },
});

export default Cart;
