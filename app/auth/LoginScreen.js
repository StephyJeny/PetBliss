import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../constants/styles'; // Import styles

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // 📌 Validate Email
  const validateEmail = (inputEmail) => {
    setEmail(inputEmail);
    if (!inputEmail.includes('@') || !inputEmail.includes('.')) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  // 📌 Validate Password
  const validatePassword = (inputPassword) => {
    setPassword(inputPassword);
    if (inputPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      setPasswordError('');
    }
  };

  // ✅ Enable login only if inputs are valid
  const isLoginDisabled = emailError || passwordError || !email || !password;

  // 🔹 Handle Login
  const handleLogin = () => {
    if (isLoginDisabled) return;
    console.log('User logged in:', email);
    navigation.replace('DrawerNavigator'); // Navigate to Home after login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="white"
        value={email}
        onChangeText={validateEmail}
        style={styles.input}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TextInput
        placeholder="Password"
        placeholderTextColor="white"
        value={password}
        onChangeText={validatePassword}
        style={styles.input}
        secureTextEntry
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <TouchableOpacity
        style={[styles.button, isLoginDisabled && styles.disabledButton]}
        onPress={handleLogin}
        disabled={isLoginDisabled}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.link}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
}
