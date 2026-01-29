import { View, Text, StyleSheet, Image } from 'react-native';

function ProfileScreen() {
  return (
  <View style={styles.container}>
    <Image source={require('../assets/profile.png')} style={styles.image} />
    <Text style={styles.name}>Nishan K M</Text>
    <Text style={styles.role}>React Native Developer</Text>
    <Text style={styles.description}>
     Passionate developer learning React Native and building mobile apps.
    </Text>
  </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingHorizontal: 30,
  },
});

export default ProfileScreen;