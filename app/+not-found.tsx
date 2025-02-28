import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '../components/ThemedText';
import { ThemedView } from '../components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <ThemedView style={styles.container} lightColor="#ffffff" darkColor="#000000">
        <ThemedText type="title" style={styles.text} lightColor="#000000" darkColor="#ffffff">
          This screen doesn't exist.
        </ThemedText>
        <Link href="/screens/HomeScreen" style={styles.link}>
          <ThemedText type="link" style={styles.text} lightColor="#0a7ea4" darkColor="#4bb3fd">
            Go to home screen!
          </ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text: {
    textAlign: 'center',
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
