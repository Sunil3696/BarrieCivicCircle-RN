// EventsScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, TouchableOpacity, Image, SafeAreaView, Alert } from 'react-native';

const EventsScreen = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
//dummy list of items to show
  const dummyEvents = [
    {
      id: '1',
      title: 'Community Gathering',
      description: 'Join the community for an afternoon of fun and games.',
      date: '2024-04-15',
      location: 'Springfield',
      image: require('../../assets/waste.jpg'),
    },
    {
      id: '2',
      title: 'Park Meetup',
      description: 'Meet friends and neighbors in the beautiful Riverside park.',
      date: '2024-05-20',
      location: 'Riverside',
      image: require('../../assets/sips.png'),
    },
  ];

  const handleSearch = () => {
Alert.alert('You are now searching event');
  };

  //dummy action showing alert for now

  const handleAddEvent = () => {
    Alert.alert('You are now adding event');
  };

  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('DetailScreen', { item })}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <Text style={styles.cardDate}>📅 {item.date} | 📍 {item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search events"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.filterBar}>
        <Text style={styles.filterLabel}>Filter by Location:</Text>
        <TextInput
          style={styles.locationInput}
          placeholder="Enter location"
          value={locationFilter}
          onChangeText={setLocationFilter}
        />
      </View>
      <FlatList
        data={dummyEvents}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddEvent}>
        <Text style={styles.addButtonText}>+ Add Event</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  searchButton: {
    backgroundColor: '#4CAF50',
    marginLeft: 8,
    marginRight: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  filterBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  filterLabel: {
    fontSize: 14,
    color: '#333',
    marginRight: 8,
  },
  locationInput: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flexDirection: 'row',
  },
  cardImage: {
    width: 80,
    height: 80,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cardContent: {
    padding: 10,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  cardDate: {
    fontSize: 12,
    color: '#999',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventsScreen;
