import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './Screens/Login';
import Home from './Screens/Home';
import Profile from './Screens/Profile';

const MainNavigator = createStackNavigator(
  {
    Login,
    Home,
    Profile,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Login',
  },
);

export default createAppContainer(MainNavigator);
