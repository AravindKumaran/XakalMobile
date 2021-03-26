/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
  useState,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Xakal</Text>
      <Image
        source={require('../XakalApp/src/assets/images/xakal-logo.png')}
        style={{height: 100, width: 100}}></Image>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="ID"
          placeholderTextColor="#999999"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#999999"
        />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#4e73df',
    marginBottom: 20,
    fontFamily: 'Proxima-Nova'
  },
  inputView: {
    width: '80%',
    backgroundColor: 'white',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 0,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    fontFamily: 'Proxima-Nova',
  },
  inputText: {
    height: 50,
    color: 'purple',
  },
  forgot: {
    color: 'white',
    fontSize: 11,
  },
  loginBtn: {
    width: '60%',
    backgroundColor: '#4e73df',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});

export default App;
