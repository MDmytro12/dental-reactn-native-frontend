import React from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import { PatientScreen, HomeScreen } from './screens';
 
const AppNavigator = createStackNavigator({
  Home : {
    screen : HomeScreen
  } ,
  Patient : {
    screen : PatientScreen
  }
  } , 
  {
    initialRouteName : 'Home'
  }
)

export default createAppContainer(AppNavigator);


