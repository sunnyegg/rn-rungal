import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {fromRight} from 'react-navigation-transitions';

import Login from './Screens/Login';
import Home from './Screens/Home';
import Profile from './Screens/Profile';
import Manage from './Screens/Manage';
import AddProduct from './Screens/AddProduct';
import Cart from './Screens/Cart';

const MainNavigator = createStackNavigator(
  {
    Login,
    Home,
    Profile,
    Manage,
    AddProduct,
    Cart,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
    transitionConfig: () => fromRight(300),
  },
);

export default createAppContainer(MainNavigator);
