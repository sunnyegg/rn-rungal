import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getHome } from '../Public/Redux/Actions/Home';

import Rupiah from 'rupiah-format';


import { StyleSheet, Image, View, FlatList } from 'react-native';


import {
  Badge,
  Card,
  CardItem,
  Item,
  Input,
  Header,
  Footer,
  FooterTab,
  Button,
  Body,
  Icon,
  Text,
  List,
  Segment,
} from 'native-base';

const Home = ({ navigation }) => {
  const [Data, setData] = useState([]);
  const [Search, setSearch] = useState('')
  const [Cart, setCart] = useState([]);

  const Product = useSelector(state => state.Home.Home);
  const dispatch = useDispatch();

  async function getData() {
    const output = await dispatch(getHome({ search: Search }));

    setData(output.value.data.data);
  }

  // function addCart() {
  //   const { id, name, price, image, quantity } = data;
  // }

  useEffect(() => {
    getData();
  }, [Search]);

  return (
    <>
      <Header androidStatusBarColor={'#ef5777'} style={{ display: 'none' }} />
      <View style={styles.Parent}>
        <View style={{ flex: 1 }}>
          <Text style={styles.Title}>Rungal App</Text>

          <Item rounded style={styles.ItemSearch}>
            <Icon name="ios-search" style={{ margin: 5 }} />
            <Input placeholder="Search" onChange={value => setSearch(value)} onChangeText={text => setSearch(text)} value={Search} />
          </Item>
        </View>

        <View style={styles.Body}>
          <Segment style={{ backgroundColor: 'transparent' }}>
            <Button first style={{ backgroundColor: 'red' }}><Text>Name</Text></Button>
            <Button last style={{ backgroundColor: 'blue' }}><Text>Price</Text></Button>
          </Segment>
          <View style={styles.ColProduct}>
            <List
              style={{ flex: 1, marginBottom: 40 }}>
              <FlatList
                data={Data}
                renderItem={({ item }) => (
                  <CardProduct
                    name={item.name}
                    image={'http://192.168.0.106:3333/' + item.image}
                    price={item.price}
                    description={item.description}
                  />
                )}
                keyExtractor={item => item.id.toString()}
              />
            </List>
          </View>
        </View>
      </View>
      <Footer>
        <FooterTab style={styles.BottomNav}>
          <Button full onPress={() => getData()}>
            <Icon name="home" style={styles.IconColor} />
          </Button>
          <Button
            full
            badge
            vertical
            onPress={() => navigation.navigate('Cart')}>
            <Badge style={{ backgroundColor: '#ffc048' }}>
              <Text>2</Text>
            </Badge>
            <Icon name="ios-cart" style={styles.IconColor} />
          </Button>
          <Button full onPress={() => navigation.navigate('Manage')}>
            <Icon name="ios-options" style={styles.IconColor} />
          </Button>
        </FooterTab>
      </Footer>
    </>
  );
};

const CardProduct = props => {
  return (
    <Card style={styles.CardProduct}>
      <CardItem>
        <Body>
          <Image style={styles.ImageProduct} source={{ uri: props.image }} />
        </Body>
        <Body style={{ flex: 1 }}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 28,
            }}>
            {props.name}
          </Text>
          <Text style={{ flex: 5, alignSelf: 'center', fontSize: 14 }}>
            {Rupiah.convert(props.price)}
          </Text>
          <Button
            small
            iconLeft
            style={{
              flex: 1,
              alignSelf: 'center',
              justifyContent: 'center',
              backgroundColor: '#0fbcf9',
              width: 100,
            }}>
            <Icon name="ios-cart" style={{ fontSize: 16 }} />
            <Text style={{ fontSize: 8, marginLeft: -5 }}>Add to Cart</Text>
          </Button>
        </Body>
      </CardItem>
    </Card>
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
    height: 100,
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

export default Home;
