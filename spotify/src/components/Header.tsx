import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 18) return 'Good afternoon';
  return 'Good evening';
}

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>W</Text>
      </View>

      <Text style={styles.greeting}>{getGreeting()}</Text>

      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="notifications-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="time-outline" size={22} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn}>
          <Ionicons name="settings-outline" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:     'row',
    alignItems:        'center',
    gap:               12,
    paddingHorizontal: 16,
    paddingTop:        14,
    paddingBottom:     10,
  },
  avatar: {
    width:           34,
    height:          34,
    borderRadius:    17,
    backgroundColor: '#1DB954',
    alignItems:      'center',
    justifyContent:  'center',
  },
  avatarText: {
    fontSize:   15,
    fontWeight: '700',
    color:      '#000',
  },
  greeting: {
    flex:       1,
    fontSize:   20,
    fontWeight: '700',
    color:      '#fff',
  },
  icons: {
    flexDirection: 'row',
    gap:           4,
  },
  iconBtn: {
    width:           36,
    height:          36,
    borderRadius:    18,
    alignItems:      'center',
    justifyContent:  'center',
  },
});
