import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#845ec2" />
    <Routes />
  </>
);

export default App;
