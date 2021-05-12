import React from 'react';
import {Maps, Requete} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';

import Tabs from './navigation/tabs';

const Stack = createStackNavigator();

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="SignUP" component={Maps} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="Requete" component={Requete} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
