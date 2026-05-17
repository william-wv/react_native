import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';

const CHIPS = ['Music', 'Podcasts & Shows', 'Audiobooks'];

export default function FilterChips() {
  const [active, setActive] = useState('Music');

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.row}
    >
      {CHIPS.map((chip) => (
        <TouchableOpacity
          key={chip}
          style={[styles.chip, active === chip && styles.chipActive]}
          onPress={() => setActive(chip)}
        >
          <Text style={[styles.label, active === chip && styles.labelActive]}>
            {chip}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection:   'row',
    gap:             8,
    paddingHorizontal: 16,
    paddingVertical:   8,
  },
  chip: {
    paddingHorizontal: 14,
    paddingVertical:   7,
    borderRadius:      20,
    backgroundColor:   '#282828',
  },
  chipActive: {
    backgroundColor: '#fff',
  },
  label: {
    fontSize:   13,
    fontWeight: '600',
    color:      '#b3b3b3',
  },
  labelActive: {
    color: '#000',
  },
});
