import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// Import Screens
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import CartScreen from '../screens/CartScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {  // ✅ Ensure "export default" is here
  return (
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true,
          drawerStyle: { backgroundColor: '#fff', width: 250 },
          drawerLabelStyle: { fontSize: 16, fontWeight: 'bold' },
          drawerActiveTintColor: '#ff6f61',
          drawerInactiveTintColor: '#3b5998',
        }}
      >
        <Drawer.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Pet Bliss Home',
            drawerIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
          }}
        />
        <Drawer.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={{
            title: 'Pet Details',
            drawerIcon: ({ color, size }) => <Ionicons name="information-circle" size={size} color={color} />,
          }}
        />
        <Drawer.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            title: 'User Profile',
            drawerIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} />,
          }}
        />
        <Drawer.Screen 
          name="Cart" 
          component={CartScreen} 
          options={{
            title: 'Shopping Cart',
            drawerIcon: ({ color, size }) => <Ionicons name="cart" size={size} color={color} />,
          }}
        />
        <Drawer.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            title: 'App Settings',
            drawerIcon: ({ color, size }) => <Ionicons name="settings" size={size} color={color} />,
          }}
        />
      </Drawer.Navigator>
  );
}
