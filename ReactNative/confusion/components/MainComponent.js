3import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import About from './AboutComponent';
import Contact from './ContactComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import {Icon} from 'react-native-elements';

const AboutNavigator = createStackNavigator({
  About: { screen: About }
},
{
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#512EA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
        headerLeft:<Icon name='menu' size={24} color='white', onPress={()=>navigation.toggleDrawer()} />
    }
  })
});

const ContactNavigator = createStackNavigator({
  Contact: { screen: Contact }
},
{
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#512EA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
        headerLeft:<Icon name='menu' size={24} color='white', onPress={()=>navigation.toggleDrawer()} />
    }
  })
});

const HomeNavigator = createStackNavigator({
  Home: { screen: Home }
},
{
  navigationOptions: ({navigation}) => ({
    headerStyle: {
      backgroundColor: '#512EA8'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: '#fff',
        headerLeft:<Icon name='menu' size={24} color='white', onPress={()=>navigation.toggleDrawer()} />
    }
  })
});

const MenuNavigator = createStackNavigator({
  Menu: { screen: Menu,
        navigationOptions:({navigation}) => ({
            headerLeft:<Icon name='menu' size={24} color='white', onPress={()=>navigation.toggleDrawer()} />
        }) },
  Dishdetail: { screen: Dishdetail }
},
{
  initialRouteName: 'Menu',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#512EA8'
    },
    headerTintColor: '#fff', //color of icons in header
    headerTitleStyle: {
      color: '#fff'
    }
  }
});

const MainNavigator = createDrawerNavigator({
  Home: 
    { screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        drawerLabel: 'Home'
      }
    },
  About: 
    { screen: AboutNavigator,
      navigationOptions: {
        title: 'About Us',
        drawerLabel: 'About Us'
      }
    },
  Menu:
    {
      screen: MenuNavigator,
      navigationOptions: {
        title: 'Menu',
        drawerLabel: 'Menu'
      }
    },
  Contact: 
    { screen: ContactNavigator,
      navigationOptions: {
        title: 'Contact Us',
        drawerLabel: 'Contact Us'
      }
    }
}, {
  drawerBackgroundColor: '#D1C4E9'
});

class Main extends Component {

  render() {
    return (
      <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
        <MainNavigator />
      </View>
    );
  }
}

export default Main;