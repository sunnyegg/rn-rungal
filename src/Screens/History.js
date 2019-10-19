import React, { useState, useEffect } from 'react';
import { StyleSheet, View, } from 'react-native';
import { API_BASEURL } from 'react-native-dotenv'

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
} from 'native-base';

import { FlatList } from 'react-native-gesture-handler';
import Axios from 'axios';
import Rupiah from 'rupiah-format';
import Moment from 'moment';

const History = ({ navigation }) => {
  const [Data, setData] = useState([]);

  function getData() {
    Axios.get(`${API_BASEURL}/api/v1/history`)
      .then(result => {
        setData(result.data.data);
      })
      .catch(error => {
        reject(error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

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
          <Title>History Order</Title>
        </Body>
      </Header>
      <View style={{ flex: 1 }}>
        <List>
          <FlatList
            data={Data}
            renderItem={({ item }) => (
              <ListItem>
                <Body style={{ flex: 1, flexDirection: 'row' }}>
                  <View style={{ flex: 4 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                      {item.name}
                    </Text>
                    <Text>Invoice: {item.invoice}</Text>
                    <Text note numberOfLines={1}>
                      Total: {Rupiah.convert(item.price)}
                    </Text>
                    <Text note numberOfLines={1}>
                      Quantity: {item.quantity}
                    </Text>
                    <Text note numberOfLines={1}>
                      Date: {Moment(item.date_created).format('LL')}
                    </Text>
                  </View>
                </Body>
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

export default History;
