import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BlurView } from 'expo-blur';
import { Home, Calendar, Plus, Gift, User } from 'lucide-react-native';

import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import CreateScreen from './screens/CreateScreen';
import WishlistsScreen from './screens/WishlistsScreen';
import ProfileScreen from './screens/ProfileScreen';
import NotificationsScreen from './screens/NotificationsScreen';

const Tab = createBottomTabNavigator();

// Telegram-style icons with proper sizing and colors
const HomeIcon = ({ focused }) => {
  const color = focused ? '#3B82F6' : '#AAA';
  return (
    <View style={styles.iconWrapper}>
      <Home size={24} strokeWidth={1.5} color={color} />
    </View>
  );
};

const EventsIcon = ({ focused }) => {
  const color = focused ? '#3B82F6' : '#AAA';
  return (
    <View style={styles.iconWrapper}>
      <Calendar size={24} strokeWidth={1.5} color={color} />
    </View>
  );
};

const CreateIcon = () => (
  <View style={styles.createButton}>
    <Plus size={26} strokeWidth={2} color="#FFFFFF" />
  </View>
);

const WishlistsIcon = ({ focused }) => {
  const color = focused ? '#3B82F6' : '#AAA';
  return (
    <View style={styles.iconWrapper}>
      <Gift size={24} strokeWidth={1.5} color={color} />
    </View>
  );
};

const ProfileIcon = ({ focused }) => {
  const color = focused ? '#3B82F6' : '#AAA';
  return (
    <View style={styles.iconWrapper}>
      <User size={24} strokeWidth={1.5} color={color} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen 
          name="Events" 
          component={EventsScreen}
          options={{
            tabBarLabel: 'Events',
          }}
        />
        <Tab.Screen 
          name="Create" 
          component={CreateScreen}
          options={{
            tabBarLabel: 'Create',
          }}
        />
        <Tab.Screen 
          name="Wishlists" 
          component={WishlistsScreen}
          options={{
            tabBarLabel: 'Wishlists',
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
        <Tab.Screen 
          name="Notifications" 
          component={NotificationsScreen}
          options={{
            tabBarLabel: 'Notifications',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function CustomTabBar({ state, descriptors, navigation }) {
  // Filter out Notifications from visible tabs
  const visibleRoutes = state.routes.filter(route => route.name !== 'Notifications');
  
  return (
    <View style={styles.tabBarContainer}>
      <BlurView intensity={60} tint="dark" style={styles.blurWrapper}>
        <View style={styles.tabBar}>
        {visibleRoutes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label = options.tabBarLabel || route.name;
          const isFocused = state.index === index;
          const isCreate = route.name === 'Create';

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const getIcon = () => {
            switch (route.name) {
              case 'Home':
                return <HomeIcon focused={isFocused} />;
              case 'Events':
                return <EventsIcon focused={isFocused} />;
              case 'Create':
                return <CreateIcon />;
              case 'Wishlists':
                return <WishlistsIcon focused={isFocused} />;
              case 'Profile':
                return <ProfileIcon focused={isFocused} />;
              default:
                return null;
            }
          };

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : { selected: false }}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              style={isCreate ? [styles.tabItem, styles.createTabItem] : styles.tabItem}
            >
              {getIcon()}
              {!isCreate && (
                <Text style={[
                  styles.tabLabel, 
                  isFocused ? styles.labelActive : styles.labelInactive
                ]}>
                  {label}
                </Text>
              )}
            </TouchableOpacity>
          );
        })}
        </View>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    paddingBottom: 32,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  blurWrapper: {
    borderRadius: 999,
    overflow: 'hidden',
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'rgba(22, 22, 24, 0.4)',
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 8,
    alignItems: 'center',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  createTabItem: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 4,
  },
  tabLabel: {
    fontSize: 11,
    marginTop: 4,
  },
  labelActive: {
    color: '#4A7CF3',
    fontWeight: '600',
  },
  labelInactive: {
    color: '#BFC3C8',
    fontWeight: '400',
  },
  // Icon wrapper
  iconWrapper: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4A7CF3',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#4A7CF3',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    pointerEvents: 'auto',
  },
});
