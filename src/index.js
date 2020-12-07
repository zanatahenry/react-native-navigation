import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'react-native';

import Routes from './routes';

const App = () => {
  return(
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#b6e3e4" />
      <Routes/>
    </>
  )
};

export default App
