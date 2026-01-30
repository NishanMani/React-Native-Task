import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function ProfileDetailsScreen({ route }) {
  const { profile } = route.params;

  return (
    <View style={styles.container}>
      <Image source={profile.image} style={styles.image} />
      <Text style={styles.name}>{profile.name}</Text>
      <Text style={styles.role}>{profile.role}</Text>
      <Text style={styles.description}>{profile.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});
