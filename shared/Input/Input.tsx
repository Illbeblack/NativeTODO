import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Colors, Fonts } from '../tokens';

export default function Input({ ...props }: TextInputProps) {
  return <TextInput {...props} style={styles.input} placeholderTextColor={'#AFB2BF'} />;
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: Colors.gray,
    padding: 10,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f14,
    color: Colors.white,
  },
});
