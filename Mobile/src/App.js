import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes/Routes';
import {AuthProvider} from './contexts/auth';
import {enableScreens} from 'react-native-screens';

enableScreens();
import MainNavigation from './routes/MainNavigation';
import ResidenceAddNavigation from './routes/ResidenceAddNavigation';
import Login from './screens/Login';
import LoginHome from './screens/Login/LoginHome';
import ForgotPass from './screens/Login/ForgotPass';
import ForgotPassConclusion from './screens/Login/ForgotPassConclusion';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={'#4D2C91'} />

      <NavigationContainer>
        <AuthProvider>
          <StatusBar backgroundColor={'#4D2C91'} />
          <ForgotPassConclusion />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
