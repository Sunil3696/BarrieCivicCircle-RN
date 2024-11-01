import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { validateEmail, validatePassword } from '../helpers/validationHelpers';
import { signInUser } from '../services/auth.service';
import LoginImage from '../../assets/logo.jpg';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      //signin user with email and password
      await signInUser(email, password);
      setError('');
    } catch (error) {
      setError("Invalid Credentials, email or password incorrect");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <Image source={LoginImage} style={styles.image} />
      
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry
      />

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signupText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f9fafd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
  },
});

export default LoginScreen;
