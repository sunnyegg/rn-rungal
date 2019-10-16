import Axios from 'axios';

export const getHome = () => {
  return {
    type: 'GET_HOME',
    // payload: fetch('http://192.168.0.106:3333/api/v1/products', {
    //   method: 'GET',
    // }),

    payload: new Promise((resolve, reject) => {
      // const { search = "", sort = "", page = "1", order = "" } = options;

      // Axios.get(
      //   `http://100.24.15.0:3000/api/v1/products?sort=${sort}&order=${order}&search=${search}&page=${page}`
      // )

      Axios.get('http://192.168.0.106:3333/api/v1/products')
        .then(result => resolve(result))
        .catch(error => reject(error));
      // fetch('http://192.168.0.106:3333/api/v1/products', {method: 'GET'})
      //   .then(result => resolve(result))
      //   .catch(error => reject(error));
    }),
  };
};
