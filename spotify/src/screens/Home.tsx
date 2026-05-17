import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNav from '../components/BottomNav';
import FilterChips from '../components/FilterChips';
import Header from '../components/Header';
import HorizontalSection, { type SectionCard } from '../components/HorizontalSection';
import QuickAccessGrid from '../components/QuickAccessGrid';

const JUMP_BACK: SectionCard[] = [
  { title: 'Songs to Sing in the Car', color: '#1a6b8a', icon: 'car' },
  { title: 'Brain Food',               color: '#4a235a', icon: 'bulb' },
  { title: 'Deep Focus',               color: '#1e3a5f', icon: 'checkmark-circle' },
  { title: 'Chill Hits',               color: '#1d6348', icon: 'water' },
];

const MADE_FOR_YOU: SectionCard[] = [
  { title: 'Daily Mix 1', sub: 'Harry Styles, The Weeknd…', color: '#8B2252', icon: 'musical-note' },
  { title: 'Daily Mix 2', sub: 'Dua Lipa, Olivia Rodrigo…', color: '#1A4A7A', icon: 'musical-note' },
  { title: 'Daily Mix 3', sub: 'Post Malone, Drake…',       color: '#2D4A1E', icon: 'musical-note' },
  { title: 'Discover Weekly', sub: 'Your weekly mixtape',   color: '#512E8E', icon: 'radio' },
];

const YOUR_SHOWS: SectionCard[] = [
  { title: 'Rádio Novelo',   sub: 'Spotify Original', color: '#7B1717', icon: 'mic' },
  { title: 'Call Her Daddy', sub: 'Spotify Exclusive', color: '#C0392B', icon: 'headset' },
  { title: 'Café da Manhã',  sub: 'Folha de S.Paulo',  color: '#E67E22', icon: 'cafe' },
  { title: 'Mano a Mano',    sub: 'Podcast',            color: '#2471A3', icon: 'people' },
];

export default function Home() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={styles.screen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.content}
        >
          <Header />
          <FilterChips />
          <QuickAccessGrid />
          <HorizontalSection title="Jump Back in"   cards={JUMP_BACK} />
          <HorizontalSection title="Made for You"   cards={MADE_FOR_YOU} />
          <HorizontalSection title="Your Shows"     cards={YOUR_SHOWS} cardSize={130} />
        </ScrollView>

        <BottomNav />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex:            1,
    backgroundColor: '#121212',
  },
  screen: {
    flex: 1,
  },
  content: {
    paddingBottom: 16,
  },
});
