import Axios from 'axios';
import { AsyncStorage } from 'react-native';
import { API_BASEURL } from 'react-native-dotenv'

export const getHome = (options) => {
  return {
    type: 'GET_HOME',
    payload: new Promise(async (resolve, reject) => {
      const { search = "", sort = "", page = "1", order = "" } = options;

      Axios.get(`${API_BASEURL}/api/v1/products?search=${search}`, {
        headers: {
          Authorization: await AsyncStorage.getItem('keyToken'),
        },
      })
        .then(result => resolve(result))
        .catch(error => reject(error));
    }),
  };
};
