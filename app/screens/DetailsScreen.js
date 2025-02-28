import { View, Text, Button } from 'react-native';

export default function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Product Details 🛒</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}
