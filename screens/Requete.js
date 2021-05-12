import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {images, icons, COLORS, FONTS, SIZES} from '../constants';

const Requete = ({navigation}) => {
  const [masterData, setmasterData] = React.useState([]);

  React.useEffect(() => {
    fetchUsers();
    return () => {};
  }, []);

  const apiURL = 'https://reqres.in/api/users?page=2';
  const fetchUsers = () => {
    fetch(apiURL)
      .then(response => response.json())
      .then(responseJson => {
        setmasterData(responseJson.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  function renderHeader() {
    return (
      <View>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 0,
            textAlign: 'center',
            color: COLORS.white,
            ...FONTS.h3,
          }}>
          The Data has been fetched from the URL:
        </Text>
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(apiURL);
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: COLORS.green,
            }}>
            Click here
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  function RenderViews({item}) {
    return (
      <View
        style={{
          margin: 10,
          padding: 10,
          backgroundColor: '#FFF',
          width: '80%',
          flex: 1,
          alignSelf: 'center',
          flexDirection: 'row',
          borderRadius: 5,
        }}>
        <Image
          source={{uri: item.avatar}}
          style={{width: 60, height: 60, borderRadius: 30}}
        />
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={{fontWeight: 'bold'}}>
            {item.first_name + ' ' + item.last_name}
          </Text>
          <Text style={{fontSize: 12}}>{item.email}</Text>
        </View>
        <TouchableOpacity
          style={{
            height: 50,
            width: 50,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'green'}}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <LinearGradient
      colors={[COLORS.secondary, COLORS.primary]}
      style={{flex: 1}}>
      {renderHeader()}
      <FlatList
        marginTop={20}
        style={{flex: 1}}
        data={masterData}
        renderItem={({item}) => <RenderViews item={item} />}
        keyExtractor={item => item.email}
      />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 0,
  },
  listItem: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
  },
});
export default Requete;
