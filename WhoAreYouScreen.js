// src/screens/auth/WhoAreYouScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { C } from '../../utils/colors';

export default function WhoAreYouScreen({ navigation }) {
  return (
    <SafeAreaView style={s.safe}>
      <View style={s.center}>
        <Image source={require('../../../assets/icon.png')} style={s.logo} resizeMode="contain" />
        <View style={s.wordmark}>
          <Text style={s.track}>Track</Text>
          <Text style={s.ai}>AI</Text>
        </View>
        <Text style={s.tagline}>Understand Today. Ace Tomorrow.</Text>

        <Text style={s.question}>Who are you?</Text>

        <TouchableOpacity style={[s.btn, { backgroundColor: C.S_BG, borderColor: C.S_BORDER }]}
          onPress={() => navigation.navigate('SelectSchool', { role: 'student' })}>
          <Text style={s.btnIcon}>🎒</Text>
          <Text style={[s.btnTxt, { color: '#a8d4ff' }]}>I'm a Student</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[s.btn, { backgroundColor: C.P_BG, borderColor: C.P_BORDER }]}
          onPress={() => navigation.navigate('SelectSchool', { role: 'professor' })}>
          <Text style={s.btnIcon}>👨‍🏫</Text>
          <Text style={[s.btnTxt, { color: '#c4b5fd' }]}>I'm a Professor</Text>
        </TouchableOpacity>

        <View style={s.divider} />
        <Text style={s.loginPrompt}>Already have an account?</Text>
        <TouchableOpacity style={[s.btn, s.outlineBtn]} onPress={() => navigation.navigate('Login')}>
          <Text style={[s.btnTxt, { color: C.MUTED }]}>Log In →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:        { flex: 1, backgroundColor: C.BG },
  center:      { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 22 },
  logo:        { width: 100, height: 100, marginBottom: 8 },
  wordmark:    { flexDirection: 'row', alignItems: 'baseline' },
  track:       { fontSize: 28, fontWeight: '700', color: C.TEXT },
  ai:          { fontSize: 28, fontWeight: '700', color: C.S },
  tagline:     { fontSize: 12, color: C.MUTED, marginBottom: 28, marginTop: 4 },
  question:    { fontSize: 16, fontWeight: '600', color: C.TEXT, marginBottom: 16 },
  btn:         { width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 14, borderRadius: 14, borderWidth: 1, marginBottom: 12 },
  btnIcon:     { fontSize: 20 },
  btnTxt:      { fontSize: 15, fontWeight: '600' },
  outlineBtn:  { backgroundColor: 'transparent', borderColor: C.BORDER },
  divider:     { width: '100%', borderTopWidth: 1, borderTopColor: '#1e2236', marginBottom: 14 },
  loginPrompt: { fontSize: 12, color: C.MUTED, marginBottom: 10 },
});
