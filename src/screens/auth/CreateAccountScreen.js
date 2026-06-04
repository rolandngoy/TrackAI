// src/screens/auth/CreateAccountScreen.js
// Placeholder — wire up real account creation against db.createAccount() later.
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { C } from '../../utils/colors';

export default function CreateAccountScreen({ navigation, route }) {
  const { role, university } = route.params || {};
  const accent = role === 'professor' ? C.P : C.S;
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={s.safe}>
      <TouchableOpacity style={s.back} onPress={() => navigation.goBack()}>
        <Text style={s.backTxt}>←</Text>
      </TouchableOpacity>

      <Text style={s.title}>Create your account</Text>
      <Text style={s.sub}>{university} · {role === 'professor' ? 'Professor' : 'Student'}</Text>

      <TextInput
        style={s.input}
        placeholder="School email"
        placeholderTextColor={C.MUTED2}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <TouchableOpacity
        style={[s.btn, { backgroundColor: accent }]}
        onPress={() => navigation.navigate('ProfileSetup', { role, university, email })}
      >
        <Text style={s.btnTxt}>Continue →</Text>
      </TouchableOpacity>

      <Text style={s.note}>⚠ Placeholder screen — not yet saving to the database.</Text>
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
