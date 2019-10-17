import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getHome } from '../Public/Redux/Actions/Home';

import { StyleSheet, View, Alert, ToastAndroid } from 'react-native';

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
  Thumbnail,
} from 'native-base';
import { FlatList } from 'react-native-gesture-handler';
import Axios from 'axios';

const DeleteProduct = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [Search, setSearch] = useState('')

  const Product = useSelector(state => state.Home.Home);
  const dispatch = useDispatch();

  async function getData() {
    const output = await dispatch(getHome({ search: Search }));

    setData(output.value.data.data);
  }

  useEffect(() => {
    getData();
  }, []);


  function Delete(getID, getName) {
    Alert.alert(
      `Delete ${getName}`,
      'Are you sure?',
      [{
        text: 'Cancel', style: 'cancel',
      },
      {
        text: 'OK', onPress: () => send(getID)
      }], { cancelable: false }
    )
    const send = (id) => {
      Axios.delete(`http://192.168.0.106:3333/api/v1/products/${id}`)
      ToastAndroid.show('Deleted Successfully!', ToastAndroid.SHORT)
      getData()
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
          <Title>Delete Product</Title>
        </Body>
      </Header>
      <View style={{ flex: 1 }}>
        <List>
          <FlatList
            data={Data}
            renderItem={({ item }) => (
              <ListItem thumbnail>
                <Left>
                  <Thumbnail square source={{ uri: 'http://192.168.0.106:3333/' + item.image }} />
                </Left>
                <Body style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 4 }}>
                    <Text>{item.name}</Text>
                    <Text note numberOfLines={1}>
                      {item.price}
                    </Text>
                  </View>
                </Body>
                <Right>
                  <Button
                    onPress={() => Delete(item.id, item.name)}
                    style={{
                      justifyContent: 'center',
                      width: 50,
                      backgroundColor: '#ff3f34'
                    }}>
                    <Icon style={{ fontSize: 24 }} name='ios-trash' />
                  </Button>
                </Right>
              </ListItem>
            )}
            keyExtractor={item => item.id.toString()}
          />
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
});

export default DeleteProduct;
