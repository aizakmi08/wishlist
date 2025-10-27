import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Dimensions,
  Pressable,
  TextInput
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { 
  Plus, 
  Gift, 
  Eye, 
  Lock, 
  Users, 
  Heart, 
  CheckCircle,
  Star,
  Edit,
  Search,
  Calendar,
  MapPin,
  Settings
} from 'lucide-react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 60) / 2; // 2 columns with padding

export default function WishlistsScreen() {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('My Wishlists');

  const filters = ['My Wishlists', 'Friends\' Lists', 'Public'];

  const myWishlists = [
    {
      id: 1,
      name: 'Tech Wishlist',
      coverImage: '💻',
      itemCount: 12,
      visibility: 'public',
      dateCreated: 'Nov 1, 2024',
      items: [
        { name: 'MacBook Pro', price: '$2,499', priority: 5, reserved: false },
        { name: 'AirPods Pro', price: '$249', priority: 4, reserved: false },
        { name: 'iPhone 15', price: '$799', priority: 3, reserved: true }
      ]
    },
    {
      id: 2,
      name: 'Birthday Gifts',
      coverImage: '🎂',
      itemCount: 8,
      visibility: 'friends',
      dateCreated: 'Oct 15, 2024',
      items: [
        { name: 'Nike Air Max', price: '$120', priority: 5, reserved: false },
        { name: 'Coffee Maker', price: '$89', priority: 4, reserved: false }
      ]
    },
    {
      id: 3,
      name: 'Secret Santa',
      coverImage: '🎁',
      itemCount: 5,
      visibility: 'private',
      dateCreated: 'Dec 1, 2024',
      items: [
        { name: 'Gift Card', price: '$50', priority: 3, reserved: false }
      ]
    }
  ];

  const friendsWishlists = [
    {
      id: 4,
      name: 'Sarah\'s Wishlist',
      coverImage: '👗',
      itemCount: 15,
      visibility: 'public',
      dateCreated: 'Nov 20, 2024',
      owner: 'Sarah',
      items: [
        { name: 'Designer Handbag', price: '$299', priority: 5, reserved: false },
        { name: 'Perfume', price: '$89', priority: 4, reserved: false }
      ]
    },
    {
      id: 5,
      name: 'Mike\'s Tech Gear',
      coverImage: '🎮',
      itemCount: 7,
      visibility: 'friends',
      dateCreated: 'Nov 25, 2024',
      owner: 'Mike',
      items: [
        { name: 'Gaming Headset', price: '$199', priority: 5, reserved: false },
        { name: 'Mechanical Keyboard', price: '$149', priority: 4, reserved: false }
      ]
    }
  ];

  const getVisibilityIcon = (visibility) => {
    switch (visibility) {
      case 'public':
        return <Eye size={16} strokeWidth={1.5} color="#4CD964" />;
      case 'friends':
        return <Users size={16} strokeWidth={1.5} color="#3B82F6" />;
      case 'private':
        return <Lock size={16} strokeWidth={1.5} color="#AAA" />;
      default:
        return <Eye size={16} strokeWidth={1.5} color="#AAA" />;
    }
  };

  const getVisibilityText = (visibility) => {
    switch (visibility) {
      case 'public':
        return 'Public';
      case 'friends':
        return 'Friends Only';
      case 'private':
        return 'Private';
      default:
        return 'Unknown';
    }
  };

  const renderWishlistCard = (wishlist) => (
    <Pressable 
      key={wishlist.id}
      style={[styles.wishlistCard, { width: cardWidth }]}
      onPress={() => console.log('Open wishlist details')}
    >
      {/* Cover Image */}
      <View style={styles.coverImage}>
        <Text style={styles.coverEmoji}>{wishlist.coverImage}</Text>
        <View style={styles.visibilityIcon}>
          {getVisibilityIcon(wishlist.visibility)}
        </View>
      </View>

      {/* Wishlist Info */}
      <View style={styles.wishlistInfo}>
        <Text style={styles.wishlistName} numberOfLines={1}>
          {wishlist.name}
        </Text>
        
        <View style={styles.wishlistMeta}>
          <Text style={styles.itemCount}>{wishlist.itemCount} items</Text>
          <View style={styles.visibilityBadge}>
            {getVisibilityIcon(wishlist.visibility)}
            <Text style={styles.visibilityText}>
              {getVisibilityText(wishlist.visibility)}
            </Text>
          </View>
        </View>

        {wishlist.owner && (
          <Text style={styles.ownerName}>by {wishlist.owner}</Text>
        )}
      </View>
    </Pressable>
  );

  const renderWishlistDetails = (wishlist) => (
    <View key={`details-${wishlist.id}`} style={styles.wishlistDetailsCard}>
      <View style={styles.detailsHeader}>
        <View style={styles.detailsTitleRow}>
          <Text style={styles.detailsTitle}>{wishlist.name}</Text>
          <TouchableOpacity style={styles.editButton}>
            <Edit size={20} strokeWidth={2} color="#4A7CF3" />
          </TouchableOpacity>
        </View>
        <Text style={styles.detailsSubtitle}>
          {getVisibilityText(wishlist.visibility)} • Created {wishlist.dateCreated}
        </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.itemsScroll}>
        {wishlist.items.map((item, index) => (
          <View key={index} style={styles.itemCard}>
            <View style={styles.itemImage}>
              <Text style={styles.itemEmoji}>📦</Text>
            </View>
            <Text style={styles.itemName} numberOfLines={1}>{item.name}</Text>
            <Text style={styles.itemPrice}>{item.price}</Text>
            
            {/* Priority Stars */}
            <View style={styles.priorityBar}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star}
                  size={12} 
                  strokeWidth={2} 
                  color={star <= item.priority ? "#FFD700" : "#BFC3C8"}
                  fill={star <= item.priority ? "#FFD700" : "none"}
                />
              ))}
            </View>

            {/* Action Buttons */}
            <View style={styles.itemActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Heart size={16} strokeWidth={2} color="#FF5A5F" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionButton, styles.reserveButton]}>
                <CheckCircle size={16} strokeWidth={2} color="#4CD964" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  const getCurrentWishlists = () => {
    switch (activeFilter) {
      case 'My Wishlists':
        return myWishlists;
      case 'Friends\' Lists':
        return friendsWishlists;
      case 'Public':
        return [...myWishlists, ...friendsWishlists].filter(w => w.visibility === 'public');
      default:
        return [];
    }
  };

  const filteredWishlists = getCurrentWishlists().filter(wishlist =>
    wishlist.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <Text style={styles.pageTitle}>Wishlists</Text>
        <TouchableOpacity style={styles.createButton}>
          <Plus size={24} strokeWidth={1.5} color="#3B82F6" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search size={20} strokeWidth={1.5} color="#AAA" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search wishlists..."
            placeholderTextColor="#BFC3C8"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* Filters */}
      <View style={styles.filterContainer}>
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[styles.filterTab, activeFilter === filter && styles.activeFilterTab]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text style={[styles.filterText, activeFilter === filter && styles.activeFilterText]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Wishlists Grid */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.wishlistsGrid}>
          {filteredWishlists.map(renderWishlistCard)}
        </View>

        {/* Detailed View for My Wishlists */}
        {activeFilter === 'My Wishlists' && (
          <View style={styles.detailsSection}>
            <Text style={styles.detailsSectionTitle}>Detailed View</Text>
            {myWishlists.map(renderWishlistDetails)}
          </View>
        )}

        {/* Empty State */}
        {filteredWishlists.length === 0 && (
          <View style={styles.emptyState}>
            <Gift size={48} strokeWidth={2} color="#BFC3C8" />
            <Text style={styles.emptyTitle}>No wishlists found</Text>
            <Text style={styles.emptySubtitle}>
              {searchQuery 
                ? 'Try adjusting your search terms'
                : activeFilter === 'My Wishlists'
                ? 'Create your first wishlist to get started'
                : 'No wishlists to show'
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
  // Search
  searchContainer: {
    paddingHorizontal: 20,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(22, 22, 24, 0.6)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  searchInput: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
  },
  // Filters
  filterContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(22, 22, 24, 0.6)',
    borderRadius: 12,
    padding: 4,
  },
  filterTab: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeFilterTab: {
    backgroundColor: '#4A7CF3',
  },
  filterText: {
    color: '#BFC3C8',
    fontSize: 14,
    fontWeight: '500',
  },
  activeFilterText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  // Scroll View
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  // Wishlists Grid
  wishlistsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  wishlistCard: {
    backgroundColor: '#161618',
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  // Cover Image
  coverImage: {
    height: 100,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  coverEmoji: {
    fontSize: 32,
  },
  visibilityIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Wishlist Info
  wishlistInfo: {
    padding: 12,
  },
  wishlistName: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  wishlistMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  itemCount: {
    color: '#BFC3C8',
    fontSize: 12,
  },
  visibilityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  visibilityText: {
    color: '#BFC3C8',
    fontSize: 10,
  },
  ownerName: {
    color: '#4A7CF3',
    fontSize: 12,
    fontWeight: '500',
  },
  // Details Section
  detailsSection: {
    marginBottom: 24,
  },
  detailsSectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  wishlistDetailsCard: {
    backgroundColor: '#161618',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.08)',
  },
  detailsHeader: {
    marginBottom: 16,
  },
  detailsTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  detailsTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
    flex: 1,
  },
  editButton: {
    padding: 4,
  },
  detailsSubtitle: {
    color: '#BFC3C8',
    fontSize: 14,
  },
  // Items Scroll
  itemsScroll: {
    marginHorizontal: -16,
  },
  itemCard: {
    width: 120,
    backgroundColor: 'rgba(22, 22, 24, 0.6)',
    borderRadius: 12,
    padding: 12,
    marginRight: 12,
    alignItems: 'center',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  itemEmoji: {
    fontSize: 24,
  },
  itemName: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 4,
  },
  itemPrice: {
    color: '#4CD964',
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  priorityBar: {
    flexDirection: 'row',
    gap: 2,
    marginBottom: 8,
  },
  itemActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(74, 124, 243, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reserveButton: {
    backgroundColor: 'rgba(76, 217, 100, 0.1)',
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