import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../theme';

const ICONS: Record<string, string> = {
  Adventure: '🏔',
  Classic:   '🏛',
  Cruiser:   '🛣',
  Naked:     '⚡',
  'Off-Road': '🌲',
  Sport:     '🏁',
  Touring:   '🌍',
};

type Props = { title: string; count: number };

export default function CategoryHeader({ title, count }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{ICONS[title] ?? '🏍'}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:   'row',
    alignItems:      'center',
    gap:             8,
    backgroundColor: colors.surface,
    paddingHorizontal: 16,
    paddingVertical:   10,
    borderBottomWidth: 1,
    borderBottomColor: colors.separator,
  },
  icon:  { fontSize: 16 },
  title: {
    flex:       1,
    fontSize:   13,
    fontWeight: '700',
    color:      colors.accent,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  count: {
    fontSize:   12,
    color:      colors.textSecondary,
  },
});
