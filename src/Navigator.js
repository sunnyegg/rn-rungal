import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './Screens/Login';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Manage from './Screens/Manage';
import AddProduct from './Screens/AddProduct';

const MainNavigator = createStackNavigator(
  {
    Login,
    Home,
    Profile,
    Manage,
    AddProduct,
  },
  {
    headerMode: 'none',
    initialRouteName: 'AddProduct',
  },
);

export default createAppContainer(MainNavigator);
