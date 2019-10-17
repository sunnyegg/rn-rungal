import React from 'react';

import { StyleSheet, View } from 'react-native';

import aqua from '../Assets/Img/aqua.jpg'

import {
  Header,
  Title,
  Button,
  Left,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Thumbnail,
  Content,
} from 'native-base';

const Cart = ({ navigation }) => {
  return (
    <>
      <Header
        androidStatusBarColor={'#ef5777'}
        style={{ backgroundColor: '#ef5777' }}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="ios-arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Checkout Products</Title>
        </Body>
      </Header>
      <Content>
        <View style={{ flex: 1 }}>
          <List>
            <ListItem thumbnail>
              <Left>
                <Thumbnail square source={aqua} />
              </Left>
              <Body style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ flex: 3 }}>
                  <Text>Aqua</Text>
                  <Text note numberOfLines={1}>
                    Rp. 3000
                  </Text>
                </View>
                <View style={{ flex: 4, flexDirection: 'row' }}>
                  <Button style={{
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    justifyContent: 'center',
                    width: 40,
                    backgroundColor: '#05c46b'
                  }}>
                    <Text>-</Text>
                  </Button>
                  <Button disabled style={{
                    borderRadius: 0,
                    justifyContent: 'center',
                    width: 50,
                    backgroundColor: '#05c46b'
                  }}>
                    <Text style={{ fontSize: 12 }}>10</Text>
                  </Button>
                  <Button style={{
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    justifyContent: 'center',
                    width: 40,
                    backgroundColor: '#05c46b'
                  }}>
                    <Text>+</Text>
                  </Button>
                </View>
              </Body>
            </ListItem>
          </List>
        </View>
      </Content>
      <View style={{ alignItems: 'center', alignSelf: 'center', borderColor: 'red' }}>
        <Text>Total Price: Rp. 50.000</Text>
        <Button style={{
          alignSelf: 'center',
          borderRadius: 10,
          justifyContent: 'center',
          backgroundColor: '#0fbcf9',
          width: 300,
          marginTop: 10,
          marginBottom: 5,
        }}>
          <Text>Checkout</Text>
        </Button>
        <Button style={{
          alignSelf: 'center',
          borderRadius: 10,
          justifyContent: 'center',
          backgroundColor: '#ef5777',
          width: 290,
          marginBottom: 20
        }}>
          <Text>Cancel</Text>
        </Button>
      </View>


    </>
  );
};

const styles = StyleSheet.create({
  Parent: {
    flex: 1,
    backgroundColor: '#ef5777',
  },
});

export default Cart;
