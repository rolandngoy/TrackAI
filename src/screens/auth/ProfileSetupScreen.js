// src/screens/auth/ProfileSetupScreen.js
// Placeholder — collect profile details and persist the session later.
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { C } from '../../utils/colors';

export default function ProfileSetupScreen({ navigation, route }) {
  const { role } = route.params || {};
  const isPro = role === 'professor';
  const accent = isPro ? C.P : C.S;

  return (
    <SafeAreaView style={s.safe}>
      <TouchableOpacity style={s.back} onPress={() => navigation.goBack()}>
        <Text style={s.backTxt}>←</Text>
      </TouchableOpacity>

      <Text style={s.title}>Set up your profile</Text>
      <Text style={s.sub}>Almost done — finish to enter TrackAI.</Text>

      <TouchableOpacity
        style={[s.btn, { backgroundColor: accent }]}
        onPress={() => navigation.replace(isPro ? 'ProfessorHome' : 'StudentHome')}
      >
        <Text style={s.btnTxt}>Finish →</Text>
      </TouchableOpacity>

      <Text style={s.note}>⚠ Placeholder screen — profile details not yet captured.</Text>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:    { flex: 1, backgroundColor: C.BG, paddingHorizontal: 22, paddingTop: 12 },
  back:    { width: 32, height: 32, borderRadius: 10, backgroundColor: C.CARD, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  backTxt: { color: C.TEXT2, fontSize: 16 },
  title:   { fontSize: 22, fontWeight: '700', color: C.TEXT, marginBottom: 4 },
  sub:     { fontSize: 12, color: C.MUTED, marginBottom: 24 },
  btn:     { padding: 14, borderRadius: 14, alignItems: 'center' },
  btnTxt:  { color: '#fff', fontSize: 14, fontWeight: '700' },
  note:    { fontSize: 11, color: C.MUTED, marginTop: 24, textAlign: 'center' },
});
