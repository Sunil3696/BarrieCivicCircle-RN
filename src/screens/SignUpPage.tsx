import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { validateEmail, validatePassword } from '../helpers/validationHelpers';
import { signUpUser } from '../services/auth.service';
import SignUpImage  from '../../assets/logo.jpg';

const SignUp = ({ navigation }) => {

  //empty instances
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignUp = async () => {
    if (!validateEmail(email)) {
      setError('Invalid email format'); //setting up error to show
      return;
    }
    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters');
      return;
    }

    try {
      //try to create user on authenticaiton on firebase
      await signUpUser(email, password);
      setError('');
      setSuccessMessage('Account created successfully! You can now log in.');
      setEmail('');
      setPassword('');
    } catch (error) {
      setError('Error creating account. Try again.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      
      <Image source={SignUpImage} style={styles.image} />
      
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
      {successMessage ? <Text style={styles.successText}>{successMessage}</Text> : null}
      
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
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
    marginBottom: 30,
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
  loginText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 15,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
  successText: {
    color: 'green',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
  },
});

export default SignUp;
