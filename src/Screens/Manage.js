import React from 'react';

import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  FlatList,
  AsyncStorage,
} from 'react-native';

import { ScrollView } from 'react-native-gesture-handler';

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
  ToastAndroid
} from 'native-base';

const Manage = ({ navigation }) => {
  async function Logout() {
    await AsyncStorage.removeItem('keyToken');
    return navigation.navigate('Login');
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
            </ListItem>
            <ListItem icon>
              <Left>
                <Button style={{ backgroundColor: '#ff3f34' }}>
                  <Icon active name="ios-trash" />
                </Button>
              </Left>
              <Body>
                <Text>Delete Product</Text>
              </Body>
            </ListItem>
            <ListItem itemDivider>
              <Text>Revenue</Text>
            </ListItem>
            <ListItem icon>
              <Left>
                <Button
                  style={{ backgroundColor: '#0be881' }}
                  onPress={() => navigation.navigate('AddProduct')}>
                  <Icon active name="ios-trending-up" />
                </Button>
              </Left>
              <Body>
                <Text>Chart Revenue</Text>
              </Body>
            </ListItem>
            <ListItem itemDivider />
            <ListItem icon onPress={() => Logout()}>
              <Left>
                <Button style={{ backgroundColor: '#ff3f34' }}>
                  <Icon active name="ios-log-out" />
                </Button>
              </Left>
              <Body>
                <Text>Logout</Text>
              </Body>
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
