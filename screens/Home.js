import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {images, SIZES} from '../constants';

const image = images.banner;

const Home = ({navigation}) => {
  function renderLogo() {
    return (
      <View
        style={{
          marginTop: -50,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{
            width: '80%',
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        {renderLogo()}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});

export default Home;
