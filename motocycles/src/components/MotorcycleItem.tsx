import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { Motorcycle } from '../helpers/groupByCategory';
import { colors } from '../theme';

type Props = { item: Motorcycle };

export default function MotorcycleItem({ item }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.model} numberOfLines={1}>{item.model}</Text>
      <Text style={styles.sub}>{item.brand} · {item.year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical:   12,
    borderBottomWidth: 1,
    borderBottomColor: colors.separator,
  },
  model: {
    fontSize:   15,
    fontWeight: '600',
    color:      colors.textPrimary,
  },
  sub: {
    fontSize:  13,
    color:     colors.textSecondary,
    marginTop: 2,
  },
});
