import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';

function ProfileCard({ name, image, role, description, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.card}>
        <Image source={image} style={styles.image} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{role}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
    </Pressable>
  );
}

export default ProfileCard;


const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
  },
});
