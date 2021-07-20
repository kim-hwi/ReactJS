// import React from 'react';
// import {View, Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import HomeScreen from '../screens/HomeScreen';
// import DestinationSearch from '../screens/DestinationSearch';
// import SearchResults from '../screens/SearchResults';

// import {createStackNavigator} from '@react-navigation/stack';

// const Stack = createStackNavigator();
// const HomeNavigator = props => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerShown: false,
//       }}>
//       <Stack.Screen name={'Home'} component={HomeScreen} />
//       <Stack.Screen name={'DestinationSearch'} component={DestinationSearch} />
//       <Stack.Screen name={'SearchResults'} component={SearchResults} />
//     </Stack.Navigator>
//   );
// };

// export default HomeNavigator;

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Button,
  ScrollView,
  Dimensions
} from 'react-native';
import { Auth } from 'aws-amplify';

const { width } = Dimensions.get('window');

export default function Home({ updateAuthState }) {
  const [name, setName] = useState('');
  const [todos, setTodos] = useState([]);

  async function signOut() {
    try {
      await Auth.signOut();
      updateAuthState('loggedOut');
    } catch (error) {
      console.log('Error signing out: ', error);
    }
  }

  const addTodo = () => { };

  return (
    <View style={styles.container}>
      <Button title="Sign Out" color="tomato" onPress={signOut} />
      <ScrollView>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
          placeholder="Add a Todo"
        />
        <TouchableOpacity onPress={addTodo} style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: 'tomato',
    marginVertical: 10,
    width: width * 0.8,
    fontSize: 16
  },
  buttonContainer: {
    backgroundColor: 'tomato',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: width * 0.8
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  }
});
