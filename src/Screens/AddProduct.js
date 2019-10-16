import React from 'react';

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
  Form,
  Label,
} from 'native-base';

const AddProduct = ({navigation}) => {
  return (
    <>
      <Header
        androidStatusBarColor={'#ef5777'}
        style={{backgroundColor: '#ef5777'}}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Add Product</Title>
        </Body>
      </Header>
      <View style={styles.Parent}>
        <View style={{flex: 1, backgroundColor: 'white'}}>
          <List>
            <Form>
              <Item stackedLabel>
                <Label>Product Name</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Product Description</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Product Category</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Product Price</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Product Quantity</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Product Image</Label>
                <Input />
              </Item>
            </Form>
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

export default AddProduct;
