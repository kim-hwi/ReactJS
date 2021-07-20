import React from 'react';
import {View, Text, Dimensions} from 'react-native';

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';
// import UberTypes from '../../components/UberTypes';

const HomeScreen = props => {
  return (
    <View style={{height: Dimensions.get('window').height - 400}}>
      <View>
        <HomeMap />
      </View>
      <CovidMessage />
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
