import {
  ActivityIndicator,
  Animated,
  GestureResponderEvent,
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
} from 'react-native';
import { Colors, Fonts, Radius } from '../tokens';

export default function CustomButton({
  lable,
  isLoading,
  ...props
}: PressableProps & { lable: string; isLoading?: boolean }) {
  const animatedValue = new Animated.Value(100);
  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [Colors.primaryHover, Colors.primary],
  });

  const fadeIn = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
    props.onPressIn && props.onPressIn(e);
  };

  const fadeOut = (e: GestureResponderEvent) => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
    props.onPressOut && props.onPressOut(e);
  };

  return (
    <Pressable {...props} onPressIn={fadeIn} onPressOut={fadeOut}>
      <Animated.View
        style={{
          ...styles.button,
          backgroundColor: color,
        }}>
        {!isLoading && <Text style={styles.lable}>{lable}</Text>}
        {isLoading && <ActivityIndicator size="large" color={Colors.white} />}
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: Radius.r10,
  },
  lable: {
    color: Colors.white,
    fontSize: Fonts.f18,
    fontFamily: Fonts.regular,
  },
});
