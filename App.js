import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground } from 'react-native';
import RegisterForm from './app/components/registerForm';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <ImageBackground 
          source={require('./assets/background.jpg')}
          style={styles.bg}
      >
        <View style={styles.container}>        
          <RegisterForm />          
        </View>
      </ImageBackground >
    );
  }
}

// const AppStackNavigator = createStackNavigator({
//   Register: RegisterForm
// })
const styles = StyleSheet.create({
  bg:{
    flex:1,
    alignItems:'center',
  },
  container: {
    paddingTop: 60,
    paddingLeft: 60,
    paddingRight: 60,
  },

});
