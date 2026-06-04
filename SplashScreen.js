// src/screens/auth/SplashScreen.js
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet, Image } from 'react-native';

export default function SplashScreen({ navigation }) {
  const progress = useRef(new Animated.Value(0)).current;
  const opacity  = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animate loading bar
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();

    // Fade out and navigate
    const timer = setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }).start(() => navigation.replace('WhoAreYou'));
    }, 2600);

    return () => clearTimeout(timer);
  }, []);

  const barWidth = progress.interpolate({
    inputRange:  [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <Animated.View style={[s.container, { opacity }]}>
      {/* Use the TrackAI logo image */}
      <Image
        source={require('../../../assets/icon.png')}
        style={s.logo}
        resizeMode="contain"
      />
      <View style={s.wordmark}>
        <Text style={s.track}>Track</Text>
        <Text style={s.ai}>AI</Text>
      </View>
      <Text style={s.tagline}>Understand Today. Ace Tomorrow.</Text>

      {/* Loading bar */}
      <View style={s.barTrack}>
        <Animated.View style={[s.barFill, { width: barWidth }]} />
      </View>
    </Animated.View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:     { width: 140, height: 140, marginBottom: 8 },
  wordmark: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 6 },
  track:    { fontSize: 36, fontWeight: '700', color: '#0f2060' },
  ai:       { fontSize: 36, fontWeight: '700', color: '#4a9eff' },
  tagline:  { fontSize: 13, color: '#7090b0', marginBottom: 28 },
  barTrack: { width: 80, height: 3, backgroundColor: '#e0eaf4', borderRadius: 2, overflow: 'hidden' },
  barFill:  { height: 3, backgroundColor: '#4a9eff', borderRadius: 2 },
});
