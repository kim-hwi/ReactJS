/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import 'react-native-gesture-handler';

// import React, {useEffect} from 'react';
// import {StatusBar, PermissionsAndroid, Platform} from 'react-native';
// import Geolocation from '@react-native-community/geolocation';
// import HomeScreen from './src/screens/HomeScreen';
// import Router from './src/navigation/Root';
// import {withAuthenticator} from 'aws-amplify-react-native';

import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import Amplify, { Auth } from 'aws-amplify';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import config from './aws-exports';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import ConfirmSignUp from './src/screens/ConfirmSignUp';
import Home from './src/screens/Home';
Amplify.configure(config);


navigator.geolocation = require('@react-native-community/geolocation');

// import Amplify from 'aws-amplify'
import config from './src/aws-exports'
Amplify.configure(config)

const App: () => Node = () => {
  const androidPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'DPECO App Camera Permission',
          message:
            'DPECO App needs access to your location ' +
            'so you can take awesome rides.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  // useEffect(() => {
  //   if (Platform.OS === 'android') {
  //     androidPermission();
  //   } else {
  //     // IOS
  //     Geolocation.requestAuthorization();
  //   }
  // }, []);
  useEffect(() => {
    checkAuthState();
  }, []);

  async function checkAuthState() {
    try {
      await Auth.currentAuthenticatedUser();
      console.log('✅ User is signed in');
      setUserLoggedIn('loggedIn');
    } catch (err) {
      console.log('❌ User is not signed in');
      setUserLoggedIn('loggedOut');
    }
  }
  function updateAuthState(isUserLoggedIn) {
    setUserLoggedIn(isUserLoggedIn);
  }

//   return (
//     <>
//       <StatusBar />
//       <Router />
//       {/* <SearchResults /> */}
//       {/* <DestinationSearch /> */}
//     </>
//   );
// };
  return (
    <NavigationContainer>
      {isUserLoggedIn === 'initializing' && <Initializing />}
      {isUserLoggedIn === 'loggedIn' && (
        <AppNavigator updateAuthState={updateAuthState} />
      )}
      {isUserLoggedIn === 'loggedOut' && (
        <AuthenticationNavigator updateAuthState={updateAuthState} />
      )}
    </NavigationContainer>
  )
};
export default withAuthenticator(App);
