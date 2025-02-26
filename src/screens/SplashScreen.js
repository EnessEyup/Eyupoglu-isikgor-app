import React, { useEffect, useMemo } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import { colors } from '../theme/colors';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
  const animations = useMemo(
    () => ({
      fadeAnim: new Animated.Value(0),
      scaleAnim: new Animated.Value(0.9),
      textFadeAnim: new Animated.Value(0),
    }),
    [],
  );

  const { fadeAnim, scaleAnim, textFadeAnim } = animations;

  useEffect(() => {
    Animated.sequence([
      // Logo animasyonu
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          friction: 8,
          tension: 40,
          useNativeDriver: true,
        }),
      ]),
      // Text animasyonu
      Animated.timing(textFadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      navigation.replace('MainApp');
    }, 2800);

    return () => clearTimeout(timer);
  }, [navigation, fadeAnim, scaleAnim, textFadeAnim]);

  return (
    <View style={styles.container}>
      <View style={styles.backgroundGradient} />
      <View style={styles.content}>
        <Animated.View
          style={[
            styles.logoContainer,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
            },
          ]}>
          <Image
            source={require('../../assets/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </Animated.View>
        <Animated.View
          style={[
            styles.textContainer,
            {
              opacity: textFadeAnim,
            },
          ]}>
          <Text style={styles.title}>EYÜPOĞLU IŞIKGÖR</Text>
          <View style={styles.separator} />
          <Text style={styles.subtitle}>HUKUK BÜROSU</Text>
        </Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: height,
    backgroundColor: colors.primary,
    opacity: 0.02,
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width,
    paddingHorizontal: 20,
  },
  logoContainer: {
    backgroundColor: colors.background,
    borderRadius: width,
    padding: 10,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
  },
  logo: {
    width: width * 0.95,
    height: width * 0.95,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 15,
    width: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.primary,
    letterSpacing: 2,
    textAlign: 'center',
    textShadowColor: 'rgba(44, 58, 71, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  separator: {
    width: 50,
    height: 2,
    backgroundColor: colors.primary,
    marginVertical: 10,
    borderRadius: 1,
    opacity: 0.7,
  },
  subtitle: {
    fontSize: 18,
    color: colors.primary,
    letterSpacing: 5,
    fontWeight: '500',
    opacity: 0.9,
    textShadowColor: 'rgba(44, 58, 71, 0.1)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
});

export default SplashScreen;
