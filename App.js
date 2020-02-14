/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { SafeAreaView, StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Container, Content, H1, H2, H3, Text } from 'native-base';
import { NavigationController, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import About from './screens/About';
import Profile from './screens/Profile';
import Home from './screens/Home';
import Movies from './screens/Movies'
import List from './screens/List'
import FarmerHome from './screens/FarmerHomeScreen'
import Login from './screens/Login';


const Stack = createStackNavigator();

class App extends React.Component {
  render(){
    // const Heading = (props) => (
    //   <Text style={{ fontSize: 32 }}>{ props.text }</Text>
    
    return(
      // <SafeAreaView>
      //   <Heading text="Hello World!"></Heading>
      //   <Text style={{ fontSize: 32 }}>Hello World!</Text>
      //   <H1>Hello World!</H1>
      // </SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login}/>
          <Stack.Screen name="NumA" component={FarmerHome}/>
          <Stack.Screen name="Movies" component={Movies}/>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="About" component={About}/>
          <Stack.Screen name="Profile" component={Profile}/>
          <Stack.Screen name="List" component={List}/>

        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  headingStyle: {
    fontSize: 32,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
