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
} from 'native-base';

const Home = () => {
  const [Data, setData] = useState([]);
  const Product = useSelector(state => state.Home);
  const dispatch = useDispatch();

  async function getData() {
    const output = await Axios.get('http://192.168.0.106:3333/api/v1/products');
    // const output = await dispatch(getHome());
    setData(output.data.data);
    // console.log('ini' + output);
  }

  useEffect(() => {
    getData();
    console.log('tes');
  }, []);

  return (
    <>
      <View style={styles.Parent}>
        <View style={{flex: 1}}>
          <Text style={styles.Title}>Rungal App</Text>

          <Item rounded style={styles.ItemSearch}>
            <Icon name="ios-search" style={{margin: 5}} />
            <Input placeholder="Search" />
          </Item>
        </View>

        {/*<View style={{flex: 1}}>
            <Segment style={{backgroundColor: '#ef5777'}}>
              <Button first>
                <Icon name="ios-pizza" />
              </Button>
              <Button last>
                <Icon name="ios-water" />
              </Button>
            </Segment>
          </View>*/}

        <View style={styles.Body}>
          <View style={styles.ColProduct}>
            <List style={{flex: 1}}>
              <FlatList
                data={Data}
                renderItem={({item}) => (
                  <CardProduct
                    name={item.name}
                    image={'http://192.168.0.106:3333/' + item.image}
                    price={item.price}
                    description={item.description}
                  />
                )}
                keyExtractor={item => item.id}
              />
              {/*{Data.map(item => {
              return (
                <CardProduct
                  name={item.name}
                  image={'http://192.168.0.106:3333/' + item.image}
                />
              );
            })}*/}
            </List>
          </View>
        </View>
      </View>
      <Footer>
        <FooterTab style={styles.BottomNav}>
          <Button full>
            <Icon name="home" style={styles.IconColor} />
          </Button>
          <Button full badge vertical>
            <Badge style={{backgroundColor: '#ffc048'}}>
              <Text>2</Text>
            </Badge>
            <Icon name="ios-cart" style={styles.IconColor} />
          </Button>
          {/*<Button full>
            <Icon name="ios-trending-up" style={styles.IconColor} />
          </Button>*/}
          <Button full>
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
          <Image style={styles.ImageProduct} source={{uri: props.image}} />
        </Body>
        <Body style={{flex: 1}}>
          <Text
            style={{
              flex: 1,
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 28,
            }}>
            {props.name}
          </Text>
          <Text style={{flex: 5, alignSelf: 'center', fontSize: 14}}>
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
            <Icon name="ios-cart" style={{fontSize: 16}} />
            <Text style={{fontSize: 8, marginLeft: -5}}>Add to Cart</Text>
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
    borderBottomLeftRadius: 15,
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