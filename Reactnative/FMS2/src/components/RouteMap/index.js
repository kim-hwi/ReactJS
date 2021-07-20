import React from 'react';
import {Image, FlatList} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import cars from '../../assets/data/cars';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyA-Ic0XvMtOAID6_Dju2Myn2H3bNHj1NOg';

const RouteMap = ({origin, destination}) => {
  //   const getImage = type => {
  //     if (type === 'UberX') {
  //       return require('../../assets/images/top-UberX.png');
  //     }
  //     if (type === 'Comfort') {
  //       return require('../../assets/images/top-Comfort.png');
  //     }
  //     return require('../../assets/images/top-UberXL.png');
  //   };

  const originLoc = {
    latitude: origin.details.geometry.location.lat,
    longitude: origin.details.geometry.location.lng,
  };

  const destinationLoc = {
    latitude: destination.details.geometry.location.lat,
    longitude: destination.details.geometry.location.lng,
  };

  // const origin = {
  //   latitude: 37.550814,
  //   longitude: 126.954028,
  // };

  // const destination = {
  //   latitude: 37.4129548,
  //   longitude: 127.0973365,
  // };

  //   const origin = {
  //     latitude: 28.450627,
  //     longitude: -16.263045,
  //   };

  //   const destination = {
  //     latitude: 28.450127,
  //     longitude: -16.269045,
  //   };

  return (
    <MapView
      style={{width: '100%', height: '100%'}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 37.4129548,
        longitude: 127.0995305,
        // latitude: 28.450627,
        // longitude: -16.263045,
        latitudeDelta: 0.0222,
        longitudeDelta: 0.0121,
      }}>
      <MapViewDirections
        origin={originLoc}
        destination={destinationLoc}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={5}
        strokeColor="black"
      />
      <Marker coordinate={originLoc} title={'Origin'} />
      <Marker coordinate={destinationLoc} title={'Destination'} />

      {/* {cars.map(car => (
        <Marker coordinate={{latitude: car.latitude, longitude: car.longitude}}>
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [
                {
                  rotate: `${car.heading}deg`,
                },
              ],
            }}
            source={getImage(car.type)}
          />
        </Marker>
      ))} */}
    </MapView>
  );
};

export default RouteMap;
