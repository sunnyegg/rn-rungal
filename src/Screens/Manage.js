import React from 'react';

import {
  StyleSheet,
  View,
  AsyncStorage,
  Alert
} from 'react-native';

import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
} from 'native-base';

const Manage = ({ navigation }) => {
  function Logout() {
    Alert.alert(
      'Logout',
      'Are you sure want to logout?',
      [{
        text: 'Cancel', style: 'cancel',
      },
      {
        text: 'OK', onPress: () => result()
      }], { cancelable: false }
    )
    async function result() {
      await AsyncStorage.removeItem('keyToken');
      return navigation.navigate('Login');
    }
  }

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
          <Title>Manage</Title>
        </Body>
      </Header>
      <View style={styles.Parent}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <List>
            <ListItem itemDivider>
              <Text>Manage Products</Text>
            </ListItem>
            <ListItem icon onPress={() => navigation.navigate('AddProduct')}>
              <Left>
                <Button style={{ backgroundColor: '#0be881' }}>
                  <Icon active name="ios-add-circle" />
                </Button>
              </Left>
              <Body>
                <Text>Add Product</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#ffd32a' }}>
                  <Icon active name="ios-build" />
                </Button>
              </Left>
              <Body>
                <Text>Edit Product</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon onPress={() => navigation.navigate('DeleteProduct')}>
              <Left>
                <Button
                  style={{ backgroundColor: '#ff3f34' }}>
                  <Icon active name="ios-trash" />
                </Button>
              </Left>
              <Body>
                <Text>Delete Product</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider>
              <Text>Revenue</Text>
            </ListItem>
            <ListItem icon icon onPress={() => navigation.navigate('Revenue')}>
              <Left>
                <Button
                  style={{ backgroundColor: '#4bcffa' }}>
                  <Icon active name="ios-trending-up" />
                </Button>
              </Left>
              <Body>
                <Text>Chart Revenue</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button
                  style={{ backgroundColor: '#808e9b' }}>
                  <Icon active name="ios-folder-open" />
                </Button>
              </Left>
              <Body>
                <Text>History Order</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem itemDivider />
            <ListItem icon onPress={() => Logout()}>
              <Left>
                <Button style={{ backgroundColor: '#1e272e' }}>
                  <Icon active name="ios-log-out" />
                </Button>
              </Left>
              <Body>
                <Text>Logout</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  Parent: {
    flex: 1,
    backgroundColor: '#ef5777',
    marginTop: 15,
  },
  BottomNav: {
    backgroundColor: '#ef5777',
  },
  IconColor: {
    color: 'white',
  },
});

export default Manage;
