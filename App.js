import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfilesScreen from './screens/ProfilesScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ProfilesScreen />
    </SafeAreaView>
  );
}
