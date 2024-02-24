// import React, { useEffect } from 'react';
// import LoginPage from './src/screens/authentication/LoginPage';
// import SignUpPage from './src/screens/authentication/SignUpPage';
// import SendOtpPage from './src/screens/authentication/SendOtpPage';
// // import ChangePswdPage from './src/screens/authentication/ChangePswdPage';
// import VerifyOtpPage from './src/screens/authentication/VerifyOtpPage';

// import {NavigationContainer} from '@react-navigation/native';
// import { HomestackNavigation } from './src/navigation/StackNav';
// import SplashScreen from './src/screens/SplashScreen';
// import HomePage from './src/screens/HomePage';

// const App = () => {
//   // return <SendOtpPage />;
//   // return < SignUpPage />;
//   // return <LoginPage />
//   // return <ChangePswdPage/>
//   // return < VerifyOtpPage/>
//   //return <SplashScreen />
//   //return <HomePage />

//   const [showSplash, setShowSplash] = React.useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplash(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <NavigationContainer>
//       {showSplash ? (
//         <SplashScreen />
//       ) : (
//         <HomestackNavigation />
//       )}
//     </NavigationContainer>
//   );

// };

// export default App;

import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/context/store';
import Main from '../VCM_Personal/src/Main';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
