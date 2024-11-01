// HomeScreen.tsx
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
  //dummy items
    const dummyItems = 
    [
        {
            "id": 1,
            "title": "Golden Gatherings",
            "description": "An uplifting event where seniors come together to share stories, experiences, and a warm sense of community.",
            "date": "2024-04-15",
            "location": "Community Center Hall, Maple Street, Springfield",
            "organizer": "Springfield Senior Services",
            "entryFee": "Free",
            "image": require("../../assets/waste.jpg"),
            "additionalInfo": {
                "refreshments": "Light refreshments will be provided.",
                "familyWelcome": true
            }
        },
        {
            "id": 2,
            "title": "Wisdom & Wine",
            "description": "An evening of wine, wisdom, and wonderful stories as older adults gather to share insights and life experiences.",
            "date": "2024-05-20",
            "location": "Riverfront Winery, Oak Avenue, Riverside",
            "organizer": "Riverside Elder Connect",
            "entryFee": "Free",
             "image": require("../../assets/wisdom.jpeg"),
            "additionalInfo": {
                "rsvpRequired": true,
                "ageLimit": "55+",
                "limitedSpots": true
            }
        },
        {
            "id": 3,
            "title": "Sage Social",
            "description": "A relaxed, friendly gathering where people can exchange memories, wisdom, and laughs over light refreshments.",
            "date": "2024-03-10",
            "location": "Sunshine Park Pavilion, Greenfield",
            "organizer": "Greenfield Community Services",
            "entryFee": "Free",
            "image": require("../../assets/sage.png"),
            "additionalInfo": {
                "refreshments": "Tea and snacks provided.",
                "openToAll": true
            }
        },
        {
            "id": 4,
            "title": "Timeless Talks",
            "description": "A conversational event where the past comes alive through personal stories and shared reflections.",
            "date": "2024-06-18",
            "location": "City Library Auditorium, Brooktown",
            "organizer": "Brooktown Public Library",
            "entryFee": "Free",
            "image": require("../../assets/time.jpeg"),
            "additionalInfo": {
                "seating": "Limited; arrive early to secure a spot."
            }
        },
        {
            "id": 5,
            "title": "Echoes & Stories",
            "description": "A storytelling circle for older adults to share cherished memories and enjoy the echoes of yesteryears.",
            "date": "2024-07-22",
            "location": "Elder Care Center, Willow Street, Grandville",
            "organizer": "Grandville Senior Society",
            "entryFee": "Free",
            "image": require("../../assets/echo.jpg"),
            "additionalInfo": {
                "refreshments": "Coffee and pastries will be served."
            }
        },
        {
            "id": 6,
            "title": "Silver Circle",
            "description": "A welcoming community for older adults to come together, connect, and engage in meaningful conversation.",
            "date": "2024-08-12",
            "location": "Harmony Community Hall, Sunnyvale",
            "organizer": "Sunnyvale Community Services",
            "entryFee": "Free",
            "image": require("../../assets/sage.png"),
            "additionalInfo": {
                "registration": "No registration needed; drop-ins welcome."
            }
        },
        {
            "id": 7,
            "title": "Memory Lane Meet-Up",
            "description": "A walk down memory lane, where people share moments from their past and celebrate life's journey together.",
            "date": "2024-09-05",
            "location": "Lakeview Park Gazebo, Meadow City",
            "organizer": "Meadow City Elder Programs",
            "entryFee": "Free",
            "image": require("../../assets/meetup.jpeg"),
            "additionalInfo": {
                "bringItem": "Bring a photo from your past to share with the group."
            }
        },
        {
            "id": 8,
            "title": "Stories & Sips",
            "description": "An evening of storytelling and casual conversation over coffee or tea, fostering connections and friendship.",
            "date": "2024-10-15",
            "location": "The Coffee House, Elm Street, Newtown",
            "organizer": "Newtown Senior Club",
            "entryFee": "Free",
            "image": require("../../assets/sips.png"),
            "additionalInfo": {
                "firstDrink": "First round of coffee or tea is on us!"
            }
        },
        {
            "id": 9,
            "title": "Legacy Lounge",
            "description": "An event to relax and reminisce, where guests can share their legacies and listen to others’ life journeys.",
            "date": "2024-11-11",
            "location": "Legacy Center, Pine Street, Hillview",
            "organizer": "Hillview Heritage Society",
            "entryFee": "Free",
            "image": require("../../assets/waste.jpg"),
            "additionalInfo": {
                "refreshments": "Light appetizers will be provided."
            }
        },
        {
            "id": 10,
            "title": "Reflections & Connections",
            "description": "An enriching meetup focused on sharing memories, fostering friendships, and building a supportive community.",
            "date": "2024-12-03",
            "location": "Unity Hall, Downtown Center, Oakridge",
            "organizer": "Oakridge Community Council",
            "entryFee": "Free",
"image": require("../../assets/echo.jpg"),
            "additionalInfo": {
                "rsvpDeadline": "Please RSVP by November 20",
                "contact": "(555) 123-4567"
            }
        }
    ]
    
      
//rendering items looping
  const renderItem = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { item })}>
<Image source={typeof item.image === 'string' ? { uri: item.image } : item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardDescription}>{item.description}</Text>
        <Text style={styles.cardDate}>{item.date}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>Welcome to Barrie Civic Services</Text>
        <FlatList
          data={dummyItems}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
          scrollEnabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  container: {
    flexGrow: 1,
    padding: 16,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
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
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardContent: {
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
  },
  cardDate : {
    fontSize: 14,
    color: 'red',
  }
});


export default HomeScreen;

