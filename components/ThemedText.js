import { Text } from 'react-native';
import { useThemeColor } from '../hooks/useThemeColor';
import { styles } from '../constants/styles'; // Ensure your global styles are imported correctly

export function ThemedText({ children, style, lightColor, darkColor, type = 'default', ...rest }) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // Ensure the type exists in the styles object, otherwise, fallback to default
  const textStyle = styles[type] || styles.default;

  return (
    <Text style={[{ color }, textStyle, style]} {...rest}>
      {children}
    </Text>
  );
}
