import React, { useState, useEffect } from 'react';
import Axios from 'axios';

import { StyleSheet, View, ToastAndroid, AsyncStorage } from 'react-native';

import ImagePicker from 'react-native-image-picker';

import {
  Item,
  Input,
  Header,
  Title,
  Button,
  Left,
  Body,
  Icon,
  List,
  Form,
  Label,
  Text,
  Textarea,
  Picker,
  Content,
} from 'native-base';

const EditProduct = ({ navigation }) => {
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [Price, setPrice] = useState('');
  const [Photo, setPhoto] = useState('');
  const [Selected2, setSelected2] = useState('');
  const [CategoryID, setCategoryID] = useState('')

  const [Category, setCategory] = useState([])

  const priceInt = Price.toString()
  const QtyInt = Quantity.toString()

  async function getDataCategory() {
    Axios.get('http://52.91.238.76:3000/api/v1/categories', {
      headers: {
        'Authorization': await AsyncStorage.getItem('keyToken')
      }
    })
      .then(res => {
        setCategory(res.data.data);

      })
      .catch(error => {
        console.log(error);

      })

    setName(navigation.getParam('name'))
    setDescription(navigation.getParam('description'))
    setQuantity(navigation.getParam('quantity'))
    setPrice(navigation.getParam('price'))
    setPhoto(navigation.getParam('image'))
    setSelected2(navigation.getParam('category'))
    setCategoryID(navigation.getParam('id'))
  }

  useEffect(() => {
    getDataCategory()
  }, [])


  const FormCreate = (photo, data) => {
    const form = new FormData();

    form.append('image', {
      name: photo.fileName,
      type: photo.type,
      uri:
        Platform.OS === 'android'
          ? photo.uri
          : photo.uri.replace('file://', ''),
    });

    Object.keys(data).forEach(key => {
      form.append(key, data[key]);
    });

    return form
  }

  const UploadImage = () => {
    const options = {
      noData: true,
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri) {
        setPhoto(response);
      }
    });
  };

  async function SendData() {

    Axios.put(`http://52.91.238.76:3000/api/v1/products/${CategoryID}`, FormCreate(Photo, {
      name: Name,
      description: Description,
      category: Selected2,
      price: Price,
      quantity: Quantity,
    }), {
      headers: {
        'Content-Type': 'multipart/formdata',
        'Authorization': await AsyncStorage.getItem('keyToken')
      }
    })
      .then(res => {
        console.log(res);
        ToastAndroid.show('Edit Product Success!', ToastAndroid.SHORT);
        navigation.navigate('Home')

      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Failed to Edit Product!', ToastAndroid.SHORT);
      })
  }

  return (
    <>
      <Header
        androidStatusBarColor={'#ef5777'}
        style={{ backgroundColor: '#ef5777' }}>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Edit Product</Title>
        </Body>
      </Header>
      <View style={styles.Parent}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Content>
            <List>
              <Form>
                <View style={styles.FormItem}>
                  <Label style={styles.Label}>Product Name:</Label>
                  <Item rounded style={styles.FormItem}>
                    <Input
                      style={styles.InputInput}
                      onChangeText={text => setName(text)}
                      value={Name}
                    />
                  </Item>
                </View>
                <View style={styles.FormItem}>
                  <Label style={styles.Label}>Product Description:</Label>
                  <Item rounded style={styles.FormItem}>
                    <Input
                      style={styles.InputInput}
                      onChangeText={text => setDescription(text)}
                      value={Description}
                    />
                  </Item>
                </View>
                <View style={styles.FormItem}>
                  <Label style={styles.Label}>Product Category</Label>
                  <Item picker rounded style={styles.FormItem}>
                    <Picker
                      mode="drohandlePickerhandlePickerpdown"
                      style={styles.InputInput}
                      selectedValue={Selected2}
                      onValueChange={(value) => setSelected2(value)}>

                      {Category.map((item) => {
                        return (
                          <Picker.Item label={item.name} value={item.id} />
                        )
                      })}
                    </Picker>
                  </Item>
                </View>
                <View style={styles.FormItem}>
                  <Label style={styles.Label}>Product Price</Label>
                  <Item rounded style={styles.FormItem}>
                    <Input
                      keyboardType="numeric"
                      style={styles.InputInput}
                      onChangeText={text => setPrice(text)}
                      value={`${Price}`}
                    />
                  </Item>
                </View>
                <View style={styles.FormItem}>
                  <Label style={styles.Label}>Product Quantity</Label>
                  <Item rounded style={styles.FormItem}>
                    <Input
                      keyboardType={'numeric'}
                      style={styles.InputInput}
                      onChangeText={text => setQuantity(text)}
                      value={`${Quantity}`}
                    />
                  </Item>
                </View>
                <View style={styles.FormItem}>
                  <Label style={styles.Label}>Product Image</Label>
                  <Item rounded style={styles.FormItem}>
                    <Button onPress={() => UploadImage()}>
                      <Text>Upload Image</Text>
                    </Button>
                  </Item>
                </View>
                <View>
                  <Button
                    onPress={() => SendData({
                      name: Name,
                      description: Description,
                      category: Selected2,
                      price: Price,
                      quantity: Quantity,
                      image: Photo
                    })}
                    style={{
                      borderRadius: 10,
                      width: '80%',
                      alignSelf: 'center',
                      marginBottom: 20,
                      justifyContent: 'center',
                    }}>
                    <Text>Submit</Text>
                  </Button>
                </View>
              </Form>
            </List>
          </Content>
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
  FormItem: {
    margin: 10,
  },
  InputItem: {
    margin: 5,
    alignSelf: 'center',
  },
  InputInput: {
    marginLeft: 10,
  },
  Label: {
    marginLeft: 10,
  },
  BottomNav: {
    backgroundColor: '#ef5777',
  },
  IconColor: {
    color: 'white',
  },
});

export default EditProduct;
