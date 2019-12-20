import { Plugins } from '@capacitor/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const { SplashScreen } = Plugins;

// https://capacitor.ionicframework.com/docs/apis/splash-screen/
SplashScreen.hide();

ReactDOM.render(<App />, document.getElementById('root'));
