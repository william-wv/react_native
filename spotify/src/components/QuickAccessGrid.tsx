import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Item = {
  title: string;
  color: string;
  icon:  keyof typeof Ionicons.glyphMap;
};

const ITEMS: Item[] = [
  { title: 'Liked Songs',        color: '#4C3A91', icon: 'heart' },
  { title: "Harry's House",      color: '#C8570D', icon: 'home' },
  { title: 'Daily Mix 1',        color: '#1D6348', icon: 'musical-notes' },
  { title: 'Call Her Daddy',     color: '#7B1717', icon: 'mic' },
  { title: 'Productive Morning', color: '#1A5276', icon: 'sunny' },
  { title: 'Discover Weekly',    color: '#512E8E', icon: 'radio' },
];

function GridCard({ item }: { item: Item }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.7}>
      <View style={[styles.thumb, { backgroundColor: item.color }]}>
        <Ionicons name={item.icon} size={24} color="#fff" />
      </View>
      <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
    </TouchableOpacity>
  );
}

export default function QuickAccessGrid() {
  return (
    <View style={styles.grid}>
      {ITEMS.map((item) => (
        <GridCard key={item.title} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection:     'row',
    flexWrap:          'wrap',
    gap:               8,
    paddingHorizontal: 12,
    marginTop:         4,
  },
  card: {
    width:           '48.5%',
    flexDirection:   'row',
    alignItems:      'center',
    backgroundColor: '#282828',
    borderRadius:    6,
    overflow:        'hidden',
  },
  thumb: {
    width:           56,
    height:          56,
    alignItems:      'center',
    justifyContent:  'center',
    flexShrink:      0,
  },
  title: {
    flex:              1,
    fontSize:          12,
    fontWeight:        '700',
    color:             '#fff',
    paddingHorizontal: 10,
  },
});
