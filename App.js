import React, { Component } from 'react';
import {StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import AddToCart from './src/screens/AddToCart';
import PaymentSuccessful from './src/screens/PaymentSuccessful'
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator()

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={
          {
            title: "O Shopping",
            headerStyle:{
              backgroundColor: "#ff4d4d",
            },
            headerTitleAlign: 'center',
            headerTintColor: "white",
          }
        }>
          <Stack.Screen  name="OnlineShopping" component={Home} />
          <Stack.Screen name="AddToCart" component={AddToCart} />
          <Stack.Screen name="PaymentSuccessfull" component={PaymentSuccessful} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  icon:{
    marginRight: 10,
    color: 'white'
  },
  iconn:{
    marginLeft: 10,
    color: 'white'
  }
})



export default App;

