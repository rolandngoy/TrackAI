// src/screens/auth/SelectSchoolScreen.js
import React, { useState, useMemo } from 'react';
import {
  View, Text, TextInput, FlatList, TouchableOpacity,
  StyleSheet, SafeAreaView,
} from 'react-native';
import { UNIVERSITIES } from '../../utils/universities';
import { C } from '../../utils/colors';

const TYPE_LABEL = { featured: '⭐ Featured', public: 'Public', private: 'Private', community: 'Community' };
const TYPE_COLOR = { featured: C.P, public: C.S, private: C.TEXT2, community: C.S2 };
const TYPE_BG    = { featured: C.P_BG, public: C.S_BG, private: C.BORDER, community: '#0a2520' };
const TYPE_EMOJI = { featured: '⭐', public: '🏫', private: '🎓', community: '📚' };
const emojiFor   = u => TYPE_EMOJI[u?.t] || '🎓';
const sameUni    = (a, b) => !!a && !!b && a.n === b.n && a.l === b.l;

export default function SelectSchoolScreen({ navigation, route }) {
  const { role } = route.params;
  const isPro    = role === 'professor';
  const accent   = isPro ? C.P : C.S;

  const [query, setQuery]       = useState('');
  const [selected, setSelected] = useState(null); // the chosen university object

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return UNIVERSITIES;
    return UNIVERSITIES.filter(
      u =>
        u.n.toLowerCase().includes(q) ||
        u.l.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <SafeAreaView style={s.safe}>
      {/* Header */}
      <View style={s.header}>
        <TouchableOpacity style={s.back} onPress={() => navigation.goBack()}>
          <Text style={s.backTxt}>←</Text>
        </TouchableOpacity>
        <Text style={s.title}>Select your school</Text>
        <Text style={s.step}>Step 1/3</Text>
      </View>

      {/* Step dots */}
      <View style={s.dots}>
        {[0, 1, 2].map(i => (
          <View key={i} style={[s.dot, i === 0 ? { backgroundColor: accent } : { backgroundColor: C.BORDER }]} />
        ))}
      </View>

      <Text style={s.sub}>
        {isPro ? 'Where are you teaching?' : 'Where are you enrolled?'}
        {'  ·  Any U.S. college or university'}
      </Text>

      {/* Selected banner */}
      {selected && (
        <View style={[s.banner, { borderColor: accent + '66', backgroundColor: accent + '11' }]}>
          <Text style={s.bannerEmoji}>{emojiFor(selected)}</Text>
          <Text style={[s.bannerName, { color: accent }]} numberOfLines={1}>{selected.n}</Text>
          <Text style={{ color: accent, fontSize: 16 }}>✓</Text>
        </View>
      )}

      {/* Search */}
      <View style={s.searchRow}>
        <Text style={s.searchIcon}>🔍</Text>
        <TextInput
          style={s.input}
          placeholder="Search by school name or city…"
          placeholderTextColor={C.MUTED2}
          value={query}
          onChangeText={setQuery}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>
      <Text style={s.hint}>
        {query
          ? `${filtered.length.toLocaleString()} result${filtered.length !== 1 ? 's' : ''}`
          : `${UNIVERSITIES.length.toLocaleString()} U.S. colleges & universities`}
      </Text>

      {/* List */}
      <FlatList
        data={filtered}
        keyExtractor={(item, index) => `${item.n}|${item.l}|${index}`}
        style={s.list}
        showsVerticalScrollIndicator
        keyboardShouldPersistTaps="handled"
        initialNumToRender={15}
        maxToRenderPerBatch={20}
        windowSize={10}
        removeClippedSubviews
        renderItem={({ item }) => {
          const isSel = sameUni(item, selected);
          return (
            <TouchableOpacity
              style={[s.row, isSel && { borderColor: accent, backgroundColor: accent + '18' }]}
              onPress={() => setSelected(item)}
            >
              <View style={s.emoji}><Text style={{ fontSize: 16 }}>{emojiFor(item)}</Text></View>
              <View style={{ flex: 1 }}>
                <Text style={s.uniName}>{item.n}</Text>
                {!!item.l && <Text style={s.uniLoc}>{item.l}</Text>}
                <View style={[s.typePill, { backgroundColor: TYPE_BG[item.t] }]}>
                  <Text style={[s.typeText, { color: TYPE_COLOR[item.t] }]}>{TYPE_LABEL[item.t]}</Text>
                </View>
              </View>
              {isSel && <Text style={{ color: accent, fontSize: 16 }}>✓</Text>}
            </TouchableOpacity>
          );
        }}
      />

      {/* Next */}
      <TouchableOpacity
        style={[s.btn, { backgroundColor: accent }, !selected && { opacity: 0.4 }]}
        disabled={!selected}
        onPress={() => navigation.navigate('CreateAccount', { role, university: selected.n })}
      >
        <Text style={s.btnTxt}>Next →</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  safe:        { flex: 1, backgroundColor: C.BG, paddingHorizontal: 18 },
  header:      { flexDirection: 'row', alignItems: 'center', paddingVertical: 12 },
  back:        { width: 32, height: 32, borderRadius: 10, backgroundColor: C.CARD, alignItems: 'center', justifyContent: 'center' },
  backTxt:     { color: C.TEXT2, fontSize: 16 },
  title:       { flex: 1, marginLeft: 8, fontSize: 14, fontWeight: '600', color: C.TEXT },
  step:        { fontSize: 11, color: C.MUTED },
  dots:        { flexDirection: 'row', gap: 6, justifyContent: 'center', marginBottom: 14 },
  dot:         { width: 7, height: 7, borderRadius: 4 },
  sub:         { fontSize: 12, color: C.MUTED, marginBottom: 12 },
  banner:      { flexDirection: 'row', alignItems: 'center', gap: 8, padding: 10, borderRadius: 11, borderWidth: 1, marginBottom: 10 },
  bannerEmoji: { fontSize: 18 },
  bannerName:  { flex: 1, fontSize: 12, fontWeight: '600' },
  searchRow:   { flexDirection: 'row', alignItems: 'center', backgroundColor: C.CARD, borderRadius: 12, borderWidth: 1, borderColor: C.BORDER, paddingHorizontal: 12, marginBottom: 6 },
  searchIcon:  { fontSize: 15, marginRight: 6 },
  input:       { flex: 1, paddingVertical: 10, fontSize: 13, color: C.TEXT2 },
  hint:        { fontSize: 10, color: C.MUTED2, marginBottom: 6 },
  list:        { flex: 1 },
  row:         { flexDirection: 'row', alignItems: 'center', gap: 10, padding: 10, borderRadius: 11, borderWidth: 1, borderColor: C.BORDER, backgroundColor: C.CARD, marginBottom: 5 },
  emoji:       { width: 32, height: 32, borderRadius: 9, backgroundColor: C.BORDER, alignItems: 'center', justifyContent: 'center' },
  uniName:     { fontSize: 12, fontWeight: '600', color: C.TEXT2 },
  uniLoc:      { fontSize: 10, color: C.MUTED, marginTop: 1 },
  typePill:    { alignSelf: 'flex-start', paddingHorizontal: 5, paddingVertical: 1, borderRadius: 5, marginTop: 3 },
  typeText:    { fontSize: 9, fontWeight: '600' },
  btn:         { padding: 13, borderRadius: 14, alignItems: 'center', marginVertical: 12 },
  btnTxt:      { color: '#fff', fontSize: 14, fontWeight: '700' },
});
