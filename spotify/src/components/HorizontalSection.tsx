import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export type SectionCard = {
  title:  string;
  sub?:   string;
  color:  string;
  icon:   keyof typeof Ionicons.glyphMap;
};

type Props = {
  title:     string;
  cards:     SectionCard[];
  cardSize?: number;
};

export default function HorizontalSection({ title, cards, cardSize = 148 }: Props) {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Text style={styles.seeAll}>See all</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.row}
      >
        {cards.map((card) => (
          <TouchableOpacity key={card.title} style={[styles.card, { width: cardSize }]} activeOpacity={0.7}>
            <View style={[styles.cover, { backgroundColor: card.color, height: cardSize }]}>
              <Ionicons name={card.icon} size={48} color="rgba(255,255,255,0.9)" />
            </View>
            <Text style={styles.cardTitle} numberOfLines={2}>{card.title}</Text>
            {card.sub && <Text style={styles.cardSub} numberOfLines={1}>{card.sub}</Text>}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginTop: 24,
  },
  sectionHeader: {
    flexDirection:     'row',
    alignItems:        'center',
    justifyContent:    'space-between',
    paddingHorizontal: 16,
    marginBottom:      12,
  },
  sectionTitle: {
    fontSize:   22,
    fontWeight: '700',
    color:      '#fff',
  },
  seeAll: {
    fontSize:   12,
    fontWeight: '700',
    color:      '#b3b3b3',
  },
  row: {
    flexDirection:     'row',
    gap:               12,
    paddingHorizontal: 16,
  },
  card: {
    gap: 6,
  },
  cover: {
    borderRadius:   6,
    alignItems:     'center',
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize:   13,
    fontWeight: '600',
    color:      '#fff',
  },
  cardSub: {
    fontSize: 12,
    color:    '#b3b3b3',
  },
});
