import React, { useEffect } from 'react';
import LoginPage from './src/screens/authentication/LoginPage';
import SignUpPage from './src/screens/authentication/SignUpPage';
import SendOtpPage from './src/screens/authentication/SendOtpPage';
// import ChangePswdPage from './src/screens/authentication/ChangePswdPage';
import VerifyOtpPage from './src/screens/authentication/VerifyOtpPage';

import {NavigationContainer} from '@react-navigation/native';
import { HomestackNavigation } from './src/navigation/StackNav';
import SplashScreen from './src/screens/SplashScreen';

const App = () => {
  // return <SendOtpPage />;
  // return < SignUpPage />;
  // return <LoginPage />
  // return <ChangePswdPage/>
  // return < VerifyOtpPage/>
  //return <SplashScreen />

  const [showSplash, setShowSplash] = React.useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Render the splash screen conditionally
  if (showSplash) {
    return (
     <SplashScreen />
    );
  }
  else{
    return (
      <NavigationContainer>
        <HomestackNavigation />
      </NavigationContainer>
    );
  }

 
};

export default App;
