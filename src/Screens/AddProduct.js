import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { API_BASEURL } from 'react-native-dotenv'

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

const AddProduct = ({ navigation }) => {
  const [Name, setName] = useState('');
  const [Description, setDescription] = useState('');
  const [Quantity, setQuantity] = useState('');
  const [Price, setPrice] = useState('');
  const [Photo, setPhoto] = useState('');
  const [Selected2, setSelected2] = useState('');

  const [Category, setCategory] = useState([])

  async function getDataCategory() {
    Axios.get(`${API_BASEURL}/api/v1/categories`, {
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

  const handlePicker = value => {
    setSelected2(value);
  };

  async function SendData() {

    Axios.post(`${API_BASEURL}/api/v1/products`, FormCreate(Photo, {
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
        ToastAndroid.show('Add Product Success!', ToastAndroid.SHORT);
        navigation.navigate('Home')

      })
      .catch(error => {
        console.log(error);
        ToastAndroid.show('Failed to Add Product!', ToastAndroid.SHORT);
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
          <Title>Add Product</Title>
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
                      mode="dropdown"
                      style={styles.InputInput}
                      selectedValue={Selected2}
                      onValueChange={(value) => handlePicker(value)}>
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
                      value={Price}
                    />
                  </Item>
                </View>
                <View style={styles.FormItem}>
                  <Label style={styles.Label}>Product Quantity</Label>
                  <Item rounded style={styles.FormItem}>
                    <Input
                      keyboardType="numeric"
                      style={styles.InputInput}
                      onChangeText={text => setQuantity(text)}
                      value={Quantity}
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

export default AddProduct;
