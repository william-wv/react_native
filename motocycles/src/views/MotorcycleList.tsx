import React, { useMemo } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CategoryHeader from '../components/CategoryHeader';
import MotorcycleItem from '../components/MotorcycleItem';
import { groupByCategory, type Motorcycle } from '../helpers/groupByCategory';
import rawData from '../mocks/motorcycles.json';
import { colors } from '../theme';

const motorcycles = rawData as Motorcycle[];

export default function MotorcycleList() {
  const sections = useMemo(() => groupByCategory(motorcycles), []);

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Text style={styles.title}>🏍 Motocicletas</Text>
        <Text style={styles.sub}>{motorcycles.length} modelos</Text>
      </View>

      <SectionList
        sections={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MotorcycleItem item={item} />}
        renderSectionHeader={({ section }) => (
          <CategoryHeader title={section.title} count={section.data.length} />
        )}
        stickySectionHeadersEnabled
        showsVerticalScrollIndicator={false}
        initialNumToRender={20}
        maxToRenderPerBatch={30}
        windowSize={10}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex:            1,
    backgroundColor: colors.bg,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop:        20,
    paddingBottom:     12,
    borderBottomWidth: 1,
    borderBottomColor: colors.separator,
  },
  title: {
    fontSize:   22,
    fontWeight: '700',
    color:      colors.textPrimary,
  },
  sub: {
    fontSize:  13,
    color:     colors.textSecondary,
    marginTop: 2,
  },
});
