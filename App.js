import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';



import ProfileScreen from './screens/ProfileScreen';
import ProfileDetailsScreen from './screens/ProfileDetailsScreen';


function HomeScreen({ navigation }) {
  const user = {
    name: 'Nishan K M',
    role: 'React Native Developer',
    description: 'Learning navigation and data passing in React Native',
    image: require('./assets/profile.png'),
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <MaterialIcons name="home" size={64} color="#2f95dc" />

      <Text style={{ marginTop: 12, fontSize: 18 }}>
        Home Screen
      </Text>

      <Text
        style={{ marginTop: 20, color: '#2f95dc' }}
        onPress={() =>
          navigation.navigate('Profile', {
            screen: 'ProfileDetails',
            params: { profile: user },
          })
        }
      >
        Go to My Profile →
      </Text>
    </View>
  );
}


function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Profiles" 
        component={ProfileScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="ProfileDetails" 
        component={ProfileDetailsScreen} 
        options={{ title: 'Profile Details' }}
      />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = 'home';
              } else if (route.name === 'Profile') {
                iconName = 'person';
              } else if (route.name === 'Settings') {
                iconName = 'settings';
              }

              return <MaterialIcons name={iconName} size={size} color={color} />;

            },
            tabBarActiveTintColor: '#2f95dc',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Profile" component={ProfileStack} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
