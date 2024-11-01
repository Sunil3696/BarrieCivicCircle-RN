import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { signOutUser } from '../services/auth.service';
import auth from '@react-native-firebase/auth';
import commonStyles from '../styles/commonStyles';
// this screes will have all the functionality related to user profile
const ProfileScreen = () => {
  const [user, setUser] = useState(null);
//cheking user on page load once
  useEffect(() => {
    const currentUser = auth().currentUser;
    if (currentUser) {
      setUser({
        displayName: currentUser.displayName || 'Anonymous',
        email: currentUser.email,
        photoURL: currentUser.photoURL || require('../../assets/avatar.png'),
      });
    }
  }, []);

  const handleLogout = async () => {
    await signOutUser();

  };

  return (
    <View style={[commonStyles.container, styles.container]}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
      <Image source={require('../../assets/avatar.png')} style={styles.avatar} />

        <Text style={styles.userName}>{user?.displayName}</Text>
        <Text style={styles.userEmail}>{user?.email}</Text>
      </View>

      {/* Profile Actions */}
      <View style={styles.actionContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={() => alert('Edit Profile')}>
          <Text style={styles.actionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={() => alert('Saved Events')}>
          <Text style={styles.actionText}>Saved Events</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={[styles.actionText, { color: 'red' }]}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#666',
  },
  actionContainer: {
    marginTop: 16,
    width: '100%',
  },
  actionButton: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    textAlign: 'center',
  },
  logoutButton: {
    backgroundColor: '#ffe5e5',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 12,
  },
});

export default ProfileScreen;
