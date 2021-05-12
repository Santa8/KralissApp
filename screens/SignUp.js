import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  TextInput,
  Modal,
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, SIZES, FONTS, icons, images} from '../constants';
import DatePicker from 'react-native-date-picker';

const SignUp = ({navigation}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const [areas, setAreas] = React.useState([]);
  const [selectedArea, setSelectedArea] = React.useState(null);
  const [modalVisible, setModalVisible] = React.useState(false);

  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        let areaData = data.map(item => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://www.countryflags.io/${item.alpha2Code}/flat/64.png`,
          };
        });

        setAreas(areaData);

        if (areaData.length > 0) {
          let defaultData = areaData.filter(a => a.code == 'US');

          if (defaultData.length > 0) {
            setSelectedArea(defaultData[0]);
          }
        }
      });
  }, []);

  function renderLogo() {
    return (
      <View
        style={{
          marginTop: SIZES.padding * 2,
          height: 100,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.logo}
          resizeMode="contain"
          style={{
            width: '60%',
          }}
        />
      </View>
    );
  }

  function renderForm() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
        }}>
        {/* Full Name */}
        <View style={{marginTop: SIZES.padding}}>
          <Text style={{color: COLORS.green, ...FONTS.body3}}>Full Name</Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding * 0.5,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 0.5,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
              fontWeight: '100',
            }}
            placeholder="Enter Full Name"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>

        {/* Adress */}
        <View style={{marginTop: SIZES.padding}}>
          <Text style={{color: COLORS.green, ...FONTS.body3}}>Full Adress</Text>
          <TextInput
            style={{
              marginVertical: SIZES.padding * 0.5,
              borderBottomColor: COLORS.white,
              borderBottomWidth: 0.5,
              height: 40,
              color: COLORS.white,
              ...FONTS.body3,
            }}
            placeholder="Enter Adress"
            placeholderTextColor={COLORS.white}
            selectionColor={COLORS.white}
          />
        </View>
        {/* Date */}
        <View style={{marginTop: SIZES.padding}}>
          <Text style={{color: COLORS.green, ...FONTS.body3}}>Date</Text>
          <DatePicker
            date={date}
            onDateChange={setDate}
            fadeToColor={'none'}
            mode="date"
          />
        </View>
      </View>
    );
  }

  function renderButton() {
    return (
      <View style={{margin: SIZES.padding * 1.5}}>
        <TouchableOpacity
          style={{
            height: 60,
            backgroundColor: COLORS.black,
            borderRadius: SIZES.radius / 0.5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{color: COLORS.white, ...FONTS.h3}}>SignUp</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView style={{flex: 0.95}}>
      <LinearGradient
        colors={[COLORS.secondary, COLORS.primary]}
        style={{flex: 1}}>
        <ScrollView>
          {renderLogo()}
          {renderForm()}
          {renderButton()}
        </ScrollView>
      </LinearGradient>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
