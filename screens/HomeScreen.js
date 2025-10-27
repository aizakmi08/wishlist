import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image,
  Dimensions,
  Pressable
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { 
  Gift, 
  Bell,
  Calendar, 
  Heart, 
  MapPin, 
  CheckCircle, 
  Clock, 
  User, 
  Plus,
  Sparkles,
  Users,
  MessageCircle,
  Settings,
  Star,
  ArrowUp,
  Pencil,
  Trash2,
  Share2
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Top Navigation Bar */}
      <View style={styles.topNav}>
        <TouchableOpacity style={styles.profileButton}>
          <View style={styles.profileAvatar}>
            <Text style={styles.profileInitial}>U</Text>
          </View>
        </TouchableOpacity>
        
        <View style={styles.centerTitle}>
          <Gift size={24} strokeWidth={1.5} color="#3B82F6" />
          <Text style={styles.homeTitle}>Home</Text>
        </View>
        
        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Bell size={24} strokeWidth={1.5} color="#AAA" />
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>3</Text>
          </View>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Upcoming Birthdays Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Sparkles size={24} strokeWidth={1.5} color="#888" />
            <Text style={styles.sectionTitle}>Upcoming Birthdays</Text>
          </View>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.birthdayCarousel}
            contentContainerStyle={styles.carouselContent}
          >
            <Pressable 
              style={[styles.birthdayCard, styles.todayCard]}
              onLongPress={() => console.log('Quick actions for Sarah')}
            >
              <View style={styles.avatarContainer}>
                <View style={[styles.avatar, styles.todayAvatar]}>
                  <Text style={styles.avatarText}>S</Text>
                </View>
                <View style={styles.todayBadge}>
                  <Text style={styles.todayText}>Today</Text>
                </View>
              </View>
              <Text style={styles.friendName}>Sarah</Text>
              <Text style={styles.birthdayDate}>Today 🎉</Text>
            </Pressable>

            <Pressable 
              style={styles.birthdayCard}
              onLongPress={() => console.log('Quick actions for Mike')}
            >
              <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>M</Text>
                </View>
              </View>
              <Text style={styles.friendName}>Mike</Text>
              <Text style={styles.birthdayDate}>In 3 days</Text>
            </Pressable>

            <Pressable 
              style={styles.birthdayCard}
              onLongPress={() => console.log('Quick actions for Emma')}
            >
              <View style={styles.avatarContainer}>
                <View style={styles.avatar}>
                  <Text style={styles.avatarText}>E</Text>
                </View>
              </View>
              <Text style={styles.friendName}>Emma</Text>
              <Text style={styles.birthdayDate}>In 1 week</Text>
            </Pressable>
          </ScrollView>
        </View>

        {/* Upcoming Events Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Calendar size={24} strokeWidth={1.5} color="#888" />
            <Text style={styles.sectionTitle}>Upcoming Events</Text>
            <TouchableOpacity style={styles.createEventButton}>
              <Plus size={20} strokeWidth={1.5} color="#3B82F6" />
              <Text style={styles.createEventText}>Create</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.eventsList}>
            <TouchableOpacity style={styles.eventCard}>
              <View style={styles.eventImage}>
                <Sparkles size={24} strokeWidth={2} color="#4A7CF3" />
              </View>
              <View style={styles.eventContent}>
                <Text style={styles.eventName}>Birthday Bash</Text>
                <View style={styles.eventHost}>
                  <View style={styles.hostAvatar}>
                    <Text style={styles.hostInitial}>U</Text>
                  </View>
                  <Text style={styles.hostText}>by Ulugbek</Text>
                </View>
                <View style={styles.eventDetails}>
                  <View style={styles.locationRow}>
                    <Clock size={14} strokeWidth={2} color="#BFC3C8" />
                    <Text style={styles.eventDate}>Tomorrow, 7:00 PM</Text>
                  </View>
                  <View style={styles.locationRow}>
                    <MapPin size={14} strokeWidth={2} color="#BFC3C8" />
                    <Text style={styles.eventLocation}>Central Park</Text>
                  </View>
                </View>
                <View style={styles.rsvpStatus}>
                  <CheckCircle size={16} strokeWidth={2} color="#4CD964" />
                  <Text style={styles.rsvpGoingText}>Going</Text>
                </View>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.eventCard}>
              <View style={styles.eventImage}>
                <Sparkles size={24} strokeWidth={2} color="#FF9DB8" />
              </View>
              <View style={styles.eventContent}>
                <Text style={styles.eventName}>Sarah's Party</Text>
                <View style={styles.eventHost}>
                  <View style={styles.hostAvatar}>
                    <Text style={styles.hostInitial}>S</Text>
                  </View>
                  <Text style={styles.hostText}>by Sarah</Text>
                </View>
                <View style={styles.eventDetails}>
                  <View style={styles.locationRow}>
                    <Clock size={14} strokeWidth={2} color="#BFC3C8" />
                    <Text style={styles.eventDate}>Friday, 6:30 PM</Text>
                  </View>
                  <View style={styles.locationRow}>
                    <MapPin size={14} strokeWidth={2} color="#BFC3C8" />
                    <Text style={styles.eventLocation}>Sarah's House</Text>
                  </View>
                </View>
                <View style={styles.rsvpStatus}>
                  <Clock size={16} strokeWidth={2} color="#FFA500" />
                  <Text style={styles.rsvpInvitedText}>Invited</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Friends' Wishlist Activity Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Heart size={24} strokeWidth={1.5} color="#888" />
            <Text style={styles.sectionTitle}>Friends' Activity</Text>
          </View>
          
          <View style={styles.activityList}>
            <TouchableOpacity style={styles.activityCard}>
              <View style={styles.activityThumbnail}>
                <Gift size={20} strokeWidth={2} color="#4A7CF3" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>
                  <Text style={styles.activityName}>Aigerim</Text> added 'Perfume' to her wishlist
                </Text>
                <Text style={styles.activityTime}>2 hours ago</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.activityCard}>
              <View style={styles.activityThumbnail}>
                <CheckCircle size={20} strokeWidth={2} color="#4CD964" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>
                  <Text style={styles.activityName}>Bek</Text> reserved an item on your wishlist
                </Text>
                <Text style={styles.activityTime}>5 hours ago</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.activityCard}>
              <View style={styles.activityThumbnail}>
                <Sparkles size={20} strokeWidth={2} color="#4A7CF3" />
              </View>
              <View style={styles.activityContent}>
                <Text style={styles.activityText}>
                  <Text style={styles.activityName}>Ulugbek</Text> created a new event 'Birthday Bash'
                </Text>
                <Text style={styles.activityTime}>1 day ago</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom spacer for navbar */}
        <View style={styles.bottomSpacer} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F0F10',
  },
  scrollView: {
    flex: 1,
  },
  // Top Navigation
  topNav: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'transparent',
  },
  profileButton: {
    width: 40,
    height: 40,
  },
  profileAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A7CF3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInitial: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  centerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  homeTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  notificationButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 4,
    right: 4,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#FF5A5F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 8,
    fontWeight: '600',
  },
  // Sections
  section: {
    marginBottom: 32,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  createEventButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    borderRadius: 16,
  },
  createEventText: {
    color: '#4A7CF3',
    fontSize: 12,
    fontWeight: '500',
  },
  // Birthday Cards
  birthdayCarousel: {
    marginHorizontal: -20,
  },
  carouselContent: {
    paddingHorizontal: 20,
    gap: 16,
  },
  birthdayCard: {
    width: 120,
    padding: 16,
    backgroundColor: '#161618',
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  todayCard: {
    borderColor: '#4A7CF3',
    backgroundColor: 'rgba(74, 124, 243, 0.05)',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4A7CF3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  todayAvatar: {
    backgroundColor: '#FF9DB8',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  todayBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: '#4CD964',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  todayText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  friendName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  birthdayDate: {
    color: '#BFC3C8',
    fontSize: 12,
  },
  // Events
  eventsList: {
    gap: 12,
  },
  eventCard: {
    flexDirection: 'row',
    backgroundColor: '#161618',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  eventImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  eventContent: {
    flex: 1,
  },
  eventName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  eventHost: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 6,
  },
  hostAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#4A7CF3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  hostInitial: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: '600',
  },
  hostText: {
    color: '#BFC3C8',
    fontSize: 12,
  },
  eventDetails: {
    gap: 4,
    marginBottom: 8,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  eventDate: {
    color: '#BFC3C8',
    fontSize: 12,
  },
  eventLocation: {
    color: '#BFC3C8',
    fontSize: 12,
  },
  rsvpStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rsvpGoingText: {
    color: '#4CD964',
    fontSize: 12,
    fontWeight: '500',
  },
  rsvpInvitedText: {
    color: '#FFA500',
    fontSize: 12,
    fontWeight: '500',
  },
  // Activity
  activityList: {
    gap: 12,
  },
  activityCard: {
    flexDirection: 'row',
    backgroundColor: '#161618',
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  activityThumbnail: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 4,
  },
  activityName: {
    fontWeight: '600',
    color: '#4A7CF3',
  },
  activityTime: {
    color: '#BFC3C8',
    fontSize: 12,
  },
  bottomSpacer: {
    height: 120,
  },
});
