// src/screens/Placeholder.js
// Shared placeholder UI for screens that haven't been built yet.
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { C } from '../utils/colors';

export default function Placeholder({ icon, title, subtitle, accent = C.S }) {
  return (
    <SafeAreaView style={s.safe}>
      <View style={s.center}>
        <Text style={[s.icon, { color: accent }]}>{icon}</Text>
        <Text style={s.title}>{title}</Text>
        <Text style={s.sub}>{subtitle}</Text>
        <View style={[s.pill, { borderColor: accent + '66', backgroundColor: accent + '11' }]}>
          <Text style={[s.pillTxt, { color: accent }]}>Coming soon</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:    { flex: 1, backgroundColor: C.BG },
  center:  { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  icon:    { fontSize: 44, marginBottom: 12 },
  title:   { fontSize: 20, fontWeight: '700', color: C.TEXT, marginBottom: 6 },
  sub:     { fontSize: 13, color: C.MUTED, textAlign: 'center', marginBottom: 20 },
  pill:    { paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20, borderWidth: 1 },
  pillTxt: { fontSize: 12, fontWeight: '600' },
});
