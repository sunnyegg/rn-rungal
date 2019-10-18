import Axios from 'axios';
import { AsyncStorage } from 'react-native';

export const getHome = (options) => {
  return {
    type: 'GET_HOME',
    payload: new Promise(async (resolve, reject) => {
      const { search = "", sort = "", page = "1", order = "" } = options;

      // Axios.get(
      //   `http://100.24.15.0:3000/api/v1/products?sort=${sort}&order=${order}&search=${search}&page=${page}`
      // )

      Axios.get(`http://52.91.238.76:3000/api/v1/products?search=${search}`, {
        headers: {
          Authorization: await AsyncStorage.getItem('keyToken'),
        },
      })
        .then(result => resolve(result))
        .catch(error => reject(error));
    }),
  };
};
