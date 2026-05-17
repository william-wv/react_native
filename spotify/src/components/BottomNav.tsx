import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type NavItem = {
  label: string;
  icon:       keyof typeof Ionicons.glyphMap;
  iconActive: keyof typeof Ionicons.glyphMap;
};

const ITEMS: NavItem[] = [
  { label: 'Home',        icon: 'home-outline',    iconActive: 'home' },
  { label: 'Search',      icon: 'search-outline',  iconActive: 'search' },
  { label: 'Your Library', icon: 'library-outline', iconActive: 'library' },
];

export default function BottomNav() {
  const [active, setActive] = useState('Home');

  return (
    <View style={styles.container}>
      {ITEMS.map((item) => {
        const isActive = item.label === active;
        return (
          <TouchableOpacity
            key={item.label}
            style={styles.item}
            onPress={() => setActive(item.label)}
          >
            <Ionicons
              name={isActive ? item.iconActive : item.icon}
              size={24}
              color={isActive ? '#fff' : '#b3b3b3'}
            />
            <Text style={[styles.label, isActive && styles.labelActive]}>
              {item.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:   'row',
    backgroundColor: '#121212',
    borderTopWidth:  1,
    borderTopColor:  '#282828',
    paddingVertical: 10,
  },
  item: {
    flex:           1,
    alignItems:     'center',
    justifyContent: 'center',
    gap:            4,
  },
  label: {
    fontSize:   10,
    color:      '#b3b3b3',
    fontWeight: '500',
  },
  labelActive: {
    color: '#fff',
  },
});
