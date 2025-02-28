import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// 🔹 Import ThemedText for styled text
import { ThemedText } from '../../components/ThemedText';

// 🔹 Import your global styles
import { styles } from '../../constants/styles';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // 🔹 Validate Gmail format
  const validateEmail = (text) => {
    setEmail(text);
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!gmailRegex.test(text)) {
      setEmailError('Please enter a valid Gmail address (example@gmail.com)');
    } else {
      setEmailError('');
    }
  };

  // 🔹 Validate strong password
  const validatePassword = (text) => {
    setPassword(text);
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(text)) {
      setPasswordError(
        'Password must be at least 8 characters, include uppercase, lowercase, number, and special character'
      );
    } else {
      setPasswordError('');
    }
  };

  const handleSignUp = () => {
    if (!emailError && !passwordError && email !== '' && password !== '') {
      console.log('User signed up:', email);
      navigation.replace('DrawerNavigator'); // Navigate to Home after sign-up
    }
  };

  return (
    <View style={styles.container}>
      {/* 🔹 Title using ThemedText */}
      <ThemedText type="title" style={styles.title}>
        Create an Account
      </ThemedText>

      {/* 🔹 Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your Gmail address"
        value={email}
        onChangeText={validateEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? (
        <ThemedText type="error" style={styles.errorText}>
          {emailError}
        </ThemedText>
      ) : null}

      {/* 🔹 Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={validatePassword}
        secureTextEntry
      />
      {passwordError ? (
        <ThemedText type="error" style={styles.errorText}>
          {passwordError}
        </ThemedText>
      ) : null}

      {/* 🔹 Sign Up Button */}
      <TouchableOpacity
        style={[
          styles.button,
          emailError || passwordError || email === '' || password === ''
            ? styles.disabledButton
            : {},
        ]}
        onPress={handleSignUp}
        disabled={emailError || passwordError || email === '' || password === ''}
      >
        <ThemedText type="defaultSemiBold" style={styles.buttonText}>
          Sign Up
        </ThemedText>
      </TouchableOpacity>

      {/* 🔹 Already have an account? Link */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <ThemedText type="link" style={styles.link}>
          Already have an account? Log in
        </ThemedText>
      </TouchableOpacity>
    </View>
  );
}
