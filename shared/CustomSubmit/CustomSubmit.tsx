import { LinkProps } from 'expo-router/build/link/Link';
import { Link } from 'expo-router';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export default function CustomSubmit({
  lable,
  ...props
}: PressableProps & LinkProps & { lable: string }) {
  return (
    <Pressable style={styles.button} {...props}>
      <Link {...props}>
        {' '}
        <Text style={styles.lable}>{lable}</Text>
      </Link>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: Radius.r10,
    backgroundColor: Colors.primary,
  },
  lable: {
    color: Colors.white,
    fontSize: Fonts.f18,
    fontFamily: Fonts.regular,
  },
});
