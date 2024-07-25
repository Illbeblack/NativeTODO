import { LinkProps } from 'expo-router/build/link/Link';
import { Link } from 'expo-router';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';
import { useState } from 'react';

export default function CustomSubmit({
  lable,
  ...props
}: PressableProps & LinkProps & { lable: string }) {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <Pressable
      {...props}
      onPressIn={() => setClicked(true)}
      onPressOut={() => setClicked(false)}
      style={{ ...styles.button, backgroundColor: clicked ? Colors.primaryHover : Colors.primary }}>
      <Link {...props}>
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
  },
  lable: {
    color: Colors.white,
    fontSize: Fonts.f18,
    fontFamily: Fonts.regular,
  },
});
