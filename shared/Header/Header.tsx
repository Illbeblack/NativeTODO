import { StyleSheet, Text } from 'react-native';
import { Colors, Fonts } from '../tokens';

export default function Header({ header }: { header: string }) {
  return <Text style={styles.title}>{header}</Text>;
}
const styles = StyleSheet.create({
  title: {
    color: Colors.primary,
    alignSelf: 'center',
    marginBottom: 50,
    fontFamily: Fonts.semibold,
    fontSize: Fonts.f18,
  },
});
