import Axios from 'axios';
import {AsyncStorage} from 'react-native';

export const getHome = () => {
  return {
    type: 'GET_HOME',
    payload: new Promise(async (resolve, reject) => {
      // const { search = "", sort = "", page = "1", order = "" } = options;

      // Axios.get(
      //   `http://100.24.15.0:3000/api/v1/products?sort=${sort}&order=${order}&search=${search}&page=${page}`
      // )

      Axios.get('http://192.168.0.106:3333/api/v1/products', {
        headers: {
          Authorization: await AsyncStorage.getItem('keyToken'),
        },
      })
        .then(result => resolve(result))
        .catch(error => reject(error));
    }),
  };
};
