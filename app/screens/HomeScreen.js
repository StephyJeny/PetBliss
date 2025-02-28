import {  
  View, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  Button 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { ThemedText } from '../../components/ThemedText';
import { styles } from '../../constants/styles';

export default function HomeScreen() {
  const navigation = useNavigation(); // ✅ Navigation Hook

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* 🏡 Pet Bliss Branding */}
      <Image source={require('../../assets/images/pet-bliss-logo.png')} style={styles.logo} />
      <ThemedText type="title">Welcome to Pet Bliss! 🐶🐱</ThemedText>
      <ThemedText type="default" style={styles.subtitle}>
        Your one-stop shop for pet care, food, and accessories.
      </ThemedText>

      {/* 🛒 Quick Navigation */}
      <Button title="Explore Now" onPress={() => navigation.navigate('Explore')} />

      {/* 🐾 Featured Pet Categories */}
      <View style={styles.categoriesContainer}>
        <ThemedText type="title">Explore Categories</ThemedText>
        <View style={styles.row}>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate('Dogs')}>
            <Ionicons name="paw" size={40} color="white" />
            <ThemedText type="default" style={styles.categoryText}>Dogs</ThemedText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryCard} onPress={() => navigation.navigate('Cats')}>
            <Ionicons name="logo-octocat" size={40} color="white" />
            <ThemedText type="default" style={styles.categoryText}>Cats</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
