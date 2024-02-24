import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const SplashScreen = () => {
  return (
    <View>
      <Image
        style={styles.splashImg}
        source={require('../assets/experion.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashImg: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
    marginTop: 270,
  },
});

export default SplashScreen;
