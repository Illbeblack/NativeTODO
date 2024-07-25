import { Link } from 'expo-router';
import { StyleSheet, Text } from 'react-native';
import { Colors, Fonts } from '../tokens';
import { LinkProps } from 'expo-router/build/link/Link';

export default function CustomLink({ text, ...props }: LinkProps & { text: string }) {
  return (
    <Link {...props} style={styles.link}>
      <Text>{text}</Text>
    </Link>
  );
}

const styles = StyleSheet.create({
  link: {
    textAlign: 'center',

    fontFamily: Fonts.regular,
    fontSize: Fonts.f18,
    color: Colors.link,
  },
});
