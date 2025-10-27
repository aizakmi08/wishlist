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
  Plus, 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Gift, 
  Sparkles,
  Edit,
  Share2,
  MessageCircle,
  CheckCircle,
  X
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function EventsScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('My Events');

  const tabs = ['My Events', 'Invited To', 'Past Events'];

  const myEvents = [
    {
      id: 1,
      name: 'Sarah\'s Birthday Bash',
      date: 'Tomorrow, 7:00 PM',
      type: 'birthday',
      coverImage: '🎂',
      guests: ['S', 'M', 'E', 'B'],
      daysLeft: 1,
      location: 'Central Park',
      description: 'Come celebrate Sarah\'s special day!'
    },
    {
      id: 2,
      name: 'Christmas Secret Santa',
      date: 'Dec 25, 6:00 PM',
      type: 'secret-santa',
      coverImage: '🎅',
      guests: ['A', 'B', 'C', 'D', 'E'],
      daysLeft: 15,
      location: 'My House',
      description: 'Secret Santa gift exchange party'
    }
  ];

  const invitedEvents = [
    {
      id: 3,
      name: 'Mike\'s House Party',
      date: 'Friday, 8:00 PM',
      type: 'party',
      coverImage: '🎊',
      guests: ['M', 'S', 'U'],
      daysLeft: 3,
      location: 'Mike\'s House',
      description: 'End of year celebration'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      name: 'Emma\'s Graduation',
      date: 'Nov 15, 2024',
      type: 'graduation',
      coverImage: '🎓',
      guests: ['E', 'F', 'G'],
      daysLeft: -30,
      location: 'University Hall',
      description: 'Celebrating Emma\'s achievement'
    }
  ];

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'birthday':
        return <Sparkles size={16} strokeWidth={1.5} color="#FF9DB8" />;
      case 'secret-santa':
        return <Gift size={16} strokeWidth={1.5} color="#3B82F6" />;
      case 'party':
        return <Sparkles size={16} strokeWidth={1.5} color="#4CD964" />;
      default:
        return <Calendar size={16} strokeWidth={1.5} color="#AAA" />;
    }
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'birthday':
        return '#FF9DB8';
      case 'secret-santa':
        return '#4A7CF3';
      case 'party':
        return '#4CD964';
      default:
        return '#BFC3C8';
    }
  };

  const renderEventCard = (event) => (
    <Pressable 
      key={event.id}
      style={styles.eventCard}
      onPress={() => console.log('Open event details')}
    >
      {/* Cover Photo */}
      <View style={styles.eventCover}>
        <Text style={styles.coverEmoji}>{event.coverImage}</Text>
        <View style={styles.eventTypeIcon}>
          {getEventTypeIcon(event.type)}
        </View>
        <View style={[styles.daysLeftBadge, { backgroundColor: getEventTypeColor(event.type) }]}>
          <Text style={styles.daysLeftText}>
            {event.daysLeft > 0 ? `${event.daysLeft} days left` : 'Past'}
          </Text>
        </View>
      </View>

      {/* Event Info */}
      <View style={styles.eventInfo}>
        <Text style={styles.eventName}>{event.name}</Text>
        
        <View style={styles.eventDetails}>
          <View style={styles.detailRow}>
            <Clock size={14} strokeWidth={2} color="#BFC3C8" />
            <Text style={styles.detailText}>{event.date}</Text>
          </View>
          <View style={styles.detailRow}>
            <MapPin size={14} strokeWidth={2} color="#BFC3C8" />
            <Text style={styles.detailText}>{event.location}</Text>
          </View>
        </View>

        {/* Guest Avatars */}
        <View style={styles.guestAvatars}>
          {event.guests.map((guest, index) => (
            <View key={index} style={[styles.guestAvatar, { marginLeft: index > 0 ? -8 : 0 }]}>
              <Text style={styles.guestInitial}>{guest}</Text>
            </View>
          ))}
          <View style={[styles.guestAvatar, styles.moreGuests, { marginLeft: -8 }]}>
            <Text style={styles.moreGuestsText}>+3</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );

  const getCurrentEvents = () => {
    switch (activeTab) {
      case 'My Events':
        return myEvents;
      case 'Invited To':
        return invitedEvents;
      case 'Past Events':
        return pastEvents;
      default:
        return [];
    }
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.pageTitle}>Events</Text>
        <TouchableOpacity style={styles.createButton}>
          <Plus size={24} strokeWidth={1.5} color="#3B82F6" />
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Events List */}
      <ScrollView style={styles.eventsList} showsVerticalScrollIndicator={false}>
        {getCurrentEvents().map(renderEventCard)}
        
        {/* Empty State */}
        {getCurrentEvents().length === 0 && (
          <View style={styles.emptyState}>
            <Calendar size={48} strokeWidth={2} color="#BFC3C8" />
            <Text style={styles.emptyTitle}>No {activeTab.toLowerCase()}</Text>
            <Text style={styles.emptySubtitle}>
              {activeTab === 'My Events' 
                ? 'Create your first event to get started'
                : activeTab === 'Invited To'
                ? 'You haven\'t been invited to any events yet'
                : 'No past events to show'
              }
            </Text>
          </View>
        )}

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
  // Top Bar
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'transparent',
  },
  pageTitle: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600',
  },
  createButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Tabs
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(22, 22, 24, 0.6)',
    borderRadius: 12,
    padding: 4,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeTab: {
    backgroundColor: '#4A7CF3',
  },
  tabText: {
    color: '#BFC3C8',
    fontSize: 14,
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  // Events List
  eventsList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  eventCard: {
    backgroundColor: '#161618',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  // Event Cover
  eventCover: {
    height: 120,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  coverEmoji: {
    fontSize: 48,
  },
  eventTypeIcon: {
    position: 'absolute',
    top: 12,
    left: 12,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  daysLeftBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  daysLeftText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  // Event Info
  eventInfo: {
    padding: 16,
  },
  eventName: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  eventDetails: {
    gap: 6,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    color: '#BFC3C8',
    fontSize: 14,
  },
  // Guest Avatars
  guestAvatars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  guestAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4A7CF3',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#0F0F10',
  },
  guestInitial: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  moreGuests: {
    backgroundColor: '#BFC3C8',
  },
  moreGuestsText: {
    color: '#0F0F10',
    fontSize: 10,
    fontWeight: '600',
  },
  // Empty State
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  emptyTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 16,
    marginBottom: 8,
  },
  emptySubtitle: {
    color: '#BFC3C8',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
  bottomSpacer: {
    height: 120,
  },
});