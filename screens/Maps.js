import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {COLORS, FONTS, icons, SIZES} from '../constants';

const Maps = ({navigation}) => {
  function renderMap() {
    const KralissCoordinate = {
      latitude: 48.73212881695833,
      longitude: 2.4495126465229173,
    };

    const destinationMarker = () => (
      <Marker coordinate={KralissCoordinate}>
        <View>
          <Text style={{color: COLORS.red}}>Krallis</Text>
        </View>
        <View
          style={{
            height: 32,
            width: 40,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{alignItems: 'center'}}>
            <Image
              source={icons.maps}
              style={{
                width: 25,
                height: 25,
                tintColor: COLORS.primary,
              }}
            />
          </View>
        </View>
      </Marker>
    );

    return (
      <View style={{flex: 1}}>
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={{
            flex: 1,
          }}
          region={{
            latitude: 48.73212881695833,
            longitude: 2.4495126465229173,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}>
          {destinationMarker()}
        </MapView>
      </View>
    );
  }

  return <View style={{flex: 1}}>{renderMap()}</View>;
};

export default Maps;
