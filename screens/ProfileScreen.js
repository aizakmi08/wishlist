import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  Pressable
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { 
  Edit, 
  Gift, 
  Calendar, 
  Users, 
  Settings, 
  MapPin, 
  Cake,
  ArrowRight,
  Bell,
  Shield,
  LogOut,
  MessageCircle,
  Heart,
  Sparkles
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  const userProfile = {
    name: 'Ulugbek',
    tagline: 'Tech lover | Kyrgyzstan 🇰🇬',
    birthday: 'March 15',
    location: 'Bishkek, Kyrgyzstan',
    avatar: 'U',
    wishlistCount: 3,
    eventCount: 5,
    friendCount: 12
  };

  const myWishlists = [
    { id: 1, name: 'Tech Wishlist', itemCount: 12, visibility: 'public' },
    { id: 2, name: 'Birthday Gifts', itemCount: 8, visibility: 'friends' },
    { id: 3, name: 'Secret Santa', itemCount: 5, visibility: 'private' }
  ];

  const myEvents = [
    { id: 1, name: 'Sarah\'s Birthday Bash', date: 'Tomorrow', type: 'birthday' },
    { id: 2, name: 'Christmas Secret Santa', date: 'Dec 25', type: 'secret-santa' },
    { id: 3, name: 'New Year Party', date: 'Jan 1', type: 'party' }
  ];

  const friends = [
    { name: 'Sarah', avatar: 'S', birthday: 'Today' },
    { name: 'Mike', avatar: 'M', birthday: 'In 3 days' },
    { name: 'Emma', avatar: 'E', birthday: 'In 1 week' },
    { name: 'Bek', avatar: 'B', birthday: 'In 2 weeks' }
  ];

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'birthday':
        return <Cake size={16} strokeWidth={2} color="#FF9DB8" />;
      case 'secret-santa':
        return <Gift size={16} strokeWidth={2} color="#4A7CF3" />;
      case 'party':
        return <Sparkles size={16} strokeWidth={2} color="#4CD964" />;
      default:
        return <Calendar size={16} strokeWidth={2} color="#BFC3C8" />;
    }
  };

  const renderWishlistItem = (wishlist) => (
    <TouchableOpacity key={wishlist.id} style={styles.listItem}>
      <View style={styles.listItemLeft}>
        <Gift size={20} strokeWidth={2} color="#4A7CF3" />
        <View style={styles.listItemText}>
          <Text style={styles.listItemTitle}>{wishlist.name}</Text>
          <Text style={styles.listItemSubtitle}>{wishlist.itemCount} items</Text>
        </View>
      </View>
      <ArrowRight size={16} strokeWidth={2} color="#BFC3C8" />
    </TouchableOpacity>
  );

  const renderEventItem = (event) => (
    <TouchableOpacity key={event.id} style={styles.listItem}>
      <View style={styles.listItemLeft}>
        {getEventTypeIcon(event.type)}
        <View style={styles.listItemText}>
          <Text style={styles.listItemTitle}>{event.name}</Text>
          <Text style={styles.listItemSubtitle}>{event.date}</Text>
        </View>
      </View>
      <ArrowRight size={16} strokeWidth={2} color="#BFC3C8" />
    </TouchableOpacity>
  );

  const renderFriendItem = (friend) => (
    <TouchableOpacity key={friend.name} style={styles.friendItem}>
      <View style={styles.friendAvatar}>
        <Text style={styles.friendAvatarText}>{friend.avatar}</Text>
      </View>
      <View style={styles.friendInfo}>
        <Text style={styles.friendName}>{friend.name}</Text>
        <Text style={styles.friendBirthday}>{friend.birthday}</Text>
      </View>
      <View style={styles.friendActions}>
        <TouchableOpacity style={styles.friendActionButton}>
          <MessageCircle size={16} strokeWidth={2} color="#4A7CF3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.friendActionButton}>
          <Gift size={16} strokeWidth={2} color="#4CD964" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.friendActionButton}>
          <Calendar size={16} strokeWidth={2} color="#FF9DB8" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{userProfile.avatar}</Text>
            </View>
            <TouchableOpacity style={styles.editAvatarButton}>
              <Edit size={16} strokeWidth={2} color="#4A7CF3" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>{userProfile.name}</Text>
            <Text style={styles.userTagline}>{userProfile.tagline}</Text>
          </View>

          <TouchableOpacity style={styles.editProfileButton}>
            <Edit size={20} strokeWidth={2} color="#4A7CF3" />
          </TouchableOpacity>
        </View>

        {/* Profile Details */}
        <View style={styles.profileDetails}>
          <View style={styles.detailItem}>
            <Cake size={20} strokeWidth={1.5} color="#FF9DB8" />
            <Text style={styles.detailLabel}>Birthday</Text>
            <Text style={styles.detailValue}>{userProfile.birthday}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <MapPin size={20} strokeWidth={1.5} color="#3B82F6" />
            <Text style={styles.detailLabel}>Location</Text>
            <Text style={styles.detailValue}>{userProfile.location}</Text>
          </View>
        </View>

        {/* My Wishlists Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Gift size={20} strokeWidth={1.5} color="#3B82F6" />
            <Text style={styles.sectionTitle}>My Wishlists</Text>
            <Text style={styles.sectionCount}>{userProfile.wishlistCount}</Text>
          </View>
          
          <View style={styles.sectionContent}>
            {myWishlists.map(renderWishlistItem)}
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All Wishlists</Text>
              <ArrowRight size={16} strokeWidth={2} color="#4A7CF3" />
            </TouchableOpacity>
          </View>
        </View>

        {/* My Events Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Calendar size={20} strokeWidth={1.5} color="#3B82F6" />
            <Text style={styles.sectionTitle}>My Events</Text>
            <Text style={styles.sectionCount}>{userProfile.eventCount}</Text>
          </View>
          
          <View style={styles.sectionContent}>
            {myEvents.map(renderEventItem)}
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All Events</Text>
              <ArrowRight size={16} strokeWidth={2} color="#4A7CF3" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Friends Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Users size={20} strokeWidth={1.5} color="#3B82F6" />
            <Text style={styles.sectionTitle}>Friends</Text>
            <Text style={styles.sectionCount}>{userProfile.friendCount}</Text>
          </View>
          
          <View style={styles.sectionContent}>
            {friends.map(renderFriendItem)}
            <TouchableOpacity style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All Friends</Text>
              <ArrowRight size={16} strokeWidth={2} color="#4A7CF3" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Settings Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Settings size={20} strokeWidth={1.5} color="#3B82F6" />
            <Text style={styles.sectionTitle}>Settings</Text>
          </View>
          
          <View style={styles.sectionContent}>
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Bell size={20} strokeWidth={1.5} color="#3B82F6" />
                <View style={styles.listItemText}>
                  <Text style={styles.listItemTitle}>Notifications</Text>
                  <Text style={styles.listItemSubtitle}>
                    {notificationsEnabled ? 'Enabled' : 'Disabled'}
                  </Text>
                </View>
              </View>
              <ArrowRight size={16} strokeWidth={2} color="#BFC3C8" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Shield size={20} strokeWidth={1.5} color="#3B82F6" />
                <View style={styles.listItemText}>
                  <Text style={styles.listItemTitle}>Privacy</Text>
                  <Text style={styles.listItemSubtitle}>Manage your privacy settings</Text>
                </View>
              </View>
              <ArrowRight size={16} strokeWidth={2} color="#BFC3C8" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Users size={20} strokeWidth={1.5} color="#3B82F6" />
                <View style={styles.listItemText}>
                  <Text style={styles.listItemTitle}>Friends</Text>
                  <Text style={styles.listItemSubtitle}>Manage your friends list</Text>
                </View>
              </View>
              <ArrowRight size={16} strokeWidth={2} color="#BFC3C8" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.listItem, styles.logoutItem]}>
              <View style={styles.listItemLeft}>
                <LogOut size={20} strokeWidth={1.5} color="#FF5A5F" />
                <Text style={[styles.listItemTitle, styles.logoutText]}>LogOut</Text>
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
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: 'transparent',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#4A7CF3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '600',
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#161618',
    borderWidth: 2,
    borderColor: '#0F0F10',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  userName: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  userTagline: {
    color: '#BFC3C8',
    fontSize: 16,
    lineHeight: 22,
  },
  editProfileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Profile Details
  profileDetails: {
    paddingHorizontal: 20,
    marginBottom: 24,
    gap: 12,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#161618',
    borderRadius: 12,
    padding: 12,
    gap: 8,
  },
  detailLabel: {
    color: '#BFC3C8',
    fontSize: 12,
    marginRight: 4,
    minWidth: 60,
  },
  detailValue: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    flex: 1,
  },
  // Sections
  section: {
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 12,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  sectionCount: {
    color: '#4A7CF3',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionContent: {
    backgroundColor: '#161618',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  // List Items
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  listItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  listItemText: {
    flex: 1,
  },
  listItemTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  listItemSubtitle: {
    color: '#BFC3C8',
    fontSize: 14,
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    gap: 8,
  },
  viewAllText: {
    color: '#4A7CF3',
    fontSize: 16,
    fontWeight: '500',
  },
  // Friends
  friendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.08)',
  },
  friendAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#4A7CF3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  friendAvatarText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  friendInfo: {
    flex: 1,
  },
  friendName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  friendBirthday: {
    color: '#BFC3C8',
    fontSize: 14,
  },
  friendActions: {
    flexDirection: 'row',
    gap: 8,
  },
  friendActionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // LogOut
  logoutItem: {
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#FF5A5F',
  },
  bottomSpacer: {
    height: 120,
  },
});