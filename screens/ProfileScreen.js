import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import ProfileCard from '../components/ui/ProfileCard';

export default function ProfileScreen({ navigation }) {
  const profiles = [
    {
      name: 'Nishan K M',
      role: 'React Native Developer',
      description: 'Passionate developer learning React Native and building mobile apps.',
      image: require('../assets/profile.png'),
    },
    {
      name: 'Alice Johnson',
      role: 'Business Analyst',
      description: 'Turns requirements into actionable tasks',
      image: require('../assets/profile1.png'),
    },
    {
      name: 'Bob Smith',
      role: 'UI/UX Designer',
      description: 'Passionate about design systems',
      image: require('../assets/profile2.png'),
    },
    {
      name: 'Charlie Brown',
      role: 'Project Manager',
      description: 'Keeps projects on track',
      image: require('../assets/profile3.png'),
    },
    {
      name: 'Diana Prince',
      role: 'QA Engineer',
      description: 'Finds bugs faster than anyone',
      image: require('../assets/profile4.png'),
    },
    {
      name: 'Ethan Hunt',
      role: 'DevOps Engineer',
      description: 'Automates everything',
      image: require('../assets/profile5.png'),
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {profiles.map((profile, index) => (
        <ProfileCard
          key={index}
          name={profile.name}
          role={profile.role}
          description={profile.description}
          image={profile.image}
          onPress={() =>
            navigation.navigate('ProfileDetails', { profile })
          }
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});
