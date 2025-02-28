import { StyleSheet } from 'react-native';

// 🎨 Define App Colors
export const COLORS = {
  primary: '#3b5998',  // Blue background
  secondary: '#ff6f61',  // Red buttons
  textPrimary: 'white',
  textSecondary: '#333',
  cardBackground: '#fff',
  error: 'red',  // Error text color
  disabledButton: 'gray', // Disabled button color
};

// 📌 Common Styles for the Entire App
export const styles = StyleSheet.create({
  // ✅ Main container for all screens
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: COLORS.primary,
  },

  // ✅ Title and Subtitle Text
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textPrimary,
    textAlign: 'center',
    marginHorizontal: 30,
    marginBottom: 20,
  },

  // ✅ Input Fields (Used in Forms)
  input: {
    width: '90%',
    padding: 12,
    borderBottomWidth: 2,
    borderBottomColor: COLORS.textPrimary,
    color: COLORS.textPrimary,
    fontSize: 16,
    marginBottom: 15,
  },

  // ✅ Error Messages
  errorText: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: '5%',
  },

  // ✅ Buttons
  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
    marginTop: 10, // 🔹 Added spacing for consistency
  },
  buttonText: {
    color: COLORS.textPrimary,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  disabledButton: {
    backgroundColor: COLORS.disabledButton,
  },

  // ✅ Links (e.g., "Sign Up" or "Forgot Password?")
  link: {
    marginTop: 15,
    color: COLORS.textPrimary,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },

  // ✅ Categories & Product Listing Styles
  categoriesContainer: {
    marginTop: 20,
    width: '90%',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryCard: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
    marginBottom: 15, // 🔹 Added spacing for better UI
  },
  categoryText: {
    color: COLORS.textPrimary,
    fontWeight: 'bold',
    marginTop: 5,
  },

  // ✅ Product Card Styling
  productCard: {
    backgroundColor: COLORS.cardBackground,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    width: '45%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 15, // 🔹 Added spacing for a cleaner layout
  },
  productImage: {
    width: 80,
    height: 80,
    marginBottom: 5,
    resizeMode: 'contain',
  },
  productText: {
    color: COLORS.textSecondary,
    fontWeight: 'bold',
  },
});
