import LottieView from 'lottie-react-native';
import React, { useEffect, useRef } from 'react';
import { StyleSheet,Animated, Dimensions, StatusBar } from 'react-native';
import { SplashContainer } from '../styles/Styled';
import PulseText from '../component/pulse-text/PulseText';
import { name as appName } from '../../app.json';
import { addSpacesBeforeCapital } from '../utils/helper';

const { height: screenHeight } = Dimensions.get('window');
const styles = StyleSheet.create({
  lottieImage: {
    alignSelf: 'center',
    height: '100%',
    width: '100%',
    backgroundColor:'#fff',
  },
  animatedText: {
    position: 'absolute',
    alignSelf: 'center',
  },
});

const SplashScreen: React.FC = () => {
  const translateY = useRef(new Animated.Value(screenHeight)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: screenHeight / 1.5,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, [translateY]);

  return (
    <SplashContainer>
      <StatusBar  backgroundColor="#fff" barStyle="light-content" />
      <LottieView
        progress={1}
        loop={false}
        autoPlay
        speed={1}
        style={styles.lottieImage}
        source={require('../assest/carAnimationBlue.json')}
        renderMode={'SOFTWARE'}
      />
      <Animated.View style={[styles.animatedText, { transform: [{ translateY }] }]}>
        <PulseText message={addSpacesBeforeCapital(appName)} color={'#7D7F80'} fontSize={24}  />
      </Animated.View>
    </SplashContainer>
  );
};

export default SplashScreen;
