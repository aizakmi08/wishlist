import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  Pressable,
  Animated,
  PanGestureHandler,
  State
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { 
  ArrowLeft,
  Bell, 
  Gift, 
  Calendar, 
  MessageCircle,
  CheckCircle,
  Trash2,
  X,
  Heart,
  Sparkles,
  User
} from 'lucide-react-native';

const { width } = Dimensions.get('window');

export default function NotificationsScreen({ navigation }) {
  const insets = useSafeAreaInsets();
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'wishlist_reserved',
      title: 'Aigerim reserved a gift from your wishlist',
      message: 'AirPods Pro from your Tech Wishlist',
      time: '2 hours ago',
      read: false,
      icon: 'gift',
      color: '#4CD964'
    },
    {
      id: 2,
      type: 'event_invite',
      title: 'Bek invited you to Birthday Party',
      message: 'Tomorrow at 7:00 PM - Central Park',
      time: '5 hours ago',
      read: false,
      icon: 'calendar',
      color: '#FF9DB8'
    },
    {
      id: 3,
      type: 'event_message',
      title: 'New message in Christmas Event',
      message: 'Sarah: "Can\'t wait for the party! 🎉"',
      time: '1 day ago',
      read: true,
      icon: 'message',
      color: '#4A7CF3'
    },
    {
      id: 4,
      type: 'wishlist_like',
      title: 'Mike liked your wishlist item',
      message: 'MacBook Pro from Tech Wishlist',
      time: '2 days ago',
      read: true,
      icon: 'heart',
      color: '#FF5A5F'
    },
    {
      id: 5,
      type: 'birthday_reminder',
      title: 'Sarah\'s birthday is tomorrow!',
      message: 'Don\'t forget to send a gift or message',
      time: '3 days ago',
      read: true,
      icon: 'sparkles',
      color: '#FF9DB8'
    },
    {
      id: 6,
      type: 'friend_added',
      title: 'Emma added you as a friend',
      message: 'You can now see each other\'s wishlists',
      time: '1 week ago',
      read: true,
      icon: 'user',
      color: '#4A7CF3'
    }
  ]);

  const getNotificationIcon = (iconType) => {
    switch (iconType) {
      case 'gift':
        return <Gift size={20} strokeWidth={1.5} color="#4CD964" />;
      case 'calendar':
        return <Calendar size={20} strokeWidth={1.5} color="#FF9DB8" />;
      case 'message':
        return <MessageCircle size={20} strokeWidth={1.5} color="#3B82F6" />;
      case 'heart':
        return <Heart size={20} strokeWidth={1.5} color="#FF5A5F" />;
      case 'sparkles':
        return <Sparkles size={20} strokeWidth={1.5} color="#FF9DB8" />;
      case 'user':
        return <User size={20} strokeWidth={1.5} color="#3B82F6" />;
      default:
        return <Bell size={20} strokeWidth={1.5} color="#AAA" />;
    }
  };

  const markAsRead = (id) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(prev => 
      prev.filter(notification => notification.id !== id)
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const renderNotification = (notification) => (
    <Pressable 
      key={notification.id}
      style={[
        styles.notificationCard,
        !notification.read && styles.unreadCard
      ]}
      onPress={() => markAsRead(notification.id)}
    >
      <View style={styles.notificationContent}>
        <View style={styles.notificationLeft}>
          <View style={[styles.notificationIcon, { backgroundColor: notification.color + '20' }]}>
            {getNotificationIcon(notification.icon)}
          </View>
          
          <View style={styles.notificationText}>
            <Text style={[
              styles.notificationTitle,
              !notification.read && styles.unreadTitle
            ]}>
              {notification.title}
            </Text>
            <Text style={styles.notificationMessage}>
              {notification.message}
            </Text>
            <Text style={styles.notificationTime}>
              {notification.time}
            </Text>
          </View>
        </View>

        <View style={styles.notificationActions}>
          {!notification.read && (
            <TouchableOpacity 
              style={styles.actionButton}
              onPress={() => markAsRead(notification.id)}
            >
              <CheckCircle size={18} strokeWidth={2} color="#4CD964" />
            </TouchableOpacity>
          )}
          
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => deleteNotification(notification.id)}
          >
            <Trash2 size={18} strokeWidth={2} color="#FF5A5F" />
          </TouchableOpacity>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <ArrowLeft size={24} strokeWidth={1.5} color="#FFFFFF" />
        </TouchableOpacity>
        
        <View style={styles.headerCenter}>
          <Text style={styles.headerTitle}>Notifications</Text>
          {unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadBadgeText}>{unreadCount}</Text>
            </View>
          )}
        </View>

        <View style={styles.headerActions}>
          {unreadCount > 0 && (
            <TouchableOpacity 
              style={styles.headerActionButton}
              onPress={markAllAsRead}
            >
              <CheckCircle size={20} strokeWidth={1.5} color="#4CD964" />
            </TouchableOpacity>
          )}
          
          <TouchableOpacity 
            style={styles.headerActionButton}
            onPress={clearAll}
          >
            <Trash2 size={20} strokeWidth={1.5} color="#FF5A5F" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Notifications List */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {notifications.length > 0 ? (
          <>
            {notifications.map(renderNotification)}
          </>
        ) : (
          <View style={styles.emptyState}>
            <Bell size={48} strokeWidth={1.5} color="#AAA" />
            <Text style={styles.emptyTitle}>No notifications</Text>
            <Text style={styles.emptySubtitle}>
              You're all caught up! New notifications will appear here.
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
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'transparent',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  headerCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  headerTitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  unreadBadge: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FF5A5F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  headerActions: {
    flexDirection: 'row',
    gap: 8,
  },
  headerActionButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Scroll View
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  // Notifications
  notificationCard: {
    backgroundColor: '#161618',
    borderRadius: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  unreadCard: {
    borderColor: '#4A7CF3',
    backgroundColor: 'rgba(74, 124, 243, 0.05)',
  },
  notificationContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  notificationLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    flex: 1,
  },
  notificationTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
    lineHeight: 22,
  },
  unreadTitle: {
    fontWeight: '600',
  },
  notificationMessage: {
    color: '#BFC3C8',
    fontSize: 14,
    marginBottom: 4,
    lineHeight: 20,
  },
  notificationTime: {
    color: '#BFC3C8',
    fontSize: 12,
  },
  notificationActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
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
