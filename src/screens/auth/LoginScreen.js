// src/screens/auth/LoginScreen.js
// Placeholder — authenticate against db.getAccount() and db.setSession() later.
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { C } from '../../utils/colors';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={s.safe}>
      <TouchableOpacity style={s.back} onPress={() => navigation.goBack()}>
        <Text style={s.backTxt}>←</Text>
      </TouchableOpacity>

      <Text style={s.title}>Welcome back</Text>
      <Text style={s.sub}>Log in to your TrackAI account.</Text>

      <TextInput
        style={s.input}
        placeholder="School email"
        placeholderTextColor={C.MUTED2}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TouchableOpacity style={[s.btn, { backgroundColor: C.S }]} onPress={() => navigation.replace('StudentHome')}>
        <Text style={s.btnTxt}>Log In as Student →</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[s.btn, { backgroundColor: C.P, marginTop: 10 }]} onPress={() => navigation.replace('ProfessorHome')}>
        <Text style={s.btnTxt}>Log In as Professor →</Text>
      </TouchableOpacity>

      <Text style={s.note}>⚠ Placeholder screen — no real authentication yet.</Text>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:    { flex: 1, backgroundColor: C.BG, paddingHorizontal: 22, paddingTop: 12 },
  back:    { width: 32, height: 32, borderRadius: 10, backgroundColor: C.CARD, alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  backTxt: { color: C.TEXT2, fontSize: 16 },
  title:   { fontSize: 22, fontWeight: '700', color: C.TEXT, marginBottom: 4 },
  sub:     { fontSize: 12, color: C.MUTED, marginBottom: 24 },
  input:   { backgroundColor: C.CARD, borderRadius: 12, borderWidth: 1, borderColor: C.BORDER, paddingHorizontal: 14, paddingVertical: 12, color: C.TEXT2, fontSize: 14, marginBottom: 16 },
  btn:     { padding: 14, borderRadius: 14, alignItems: 'center' },
  btnTxt:  { color: '#fff', fontSize: 14, fontWeight: '700' },
  note:    { fontSize: 11, color: C.MUTED, marginTop: 24, textAlign: 'center' },
});
