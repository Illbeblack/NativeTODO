import { View, Text, StyleSheet } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Colors, Fonts, Gaps, Radius } from '../../../shared/tokens';
import CustomButton from '../../../shared/CustomButton/CustomButton';
import { useTodos } from '@/entities/store/useTodo';
import CustomLink from '../../../shared/CustomLink/CustomLink';
import { useId } from '@/entities/store/useId';

export default function TodoItem({ todo }: any) {
  const [removeTodo, toggleCompleted] = useTodos((state) => [
    state.removeTodo,
    state.toggleCompleted,
  ]);

  const [addId] = useId((state) => [state.addId]);
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        isChecked={todo.completed}
        onPress={() => toggleCompleted(todo.id)}
        fillColor="#6C38CC"
      />
      <Text
        style={{ ...styles.title, textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </Text>
      <Text
        style={{ ...styles.text, textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </Text>
      <View style={styles.wrapper}>
        <CustomLink href={'/editTodo'} text="Edit" onPress={() => addId(todo.id)} />
        <CustomButton lable="Delete" onPress={() => removeTodo(todo.id)} />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightBlack,
    borderWidth: 2,
    borderColor: Colors.gray,
    borderRadius: Radius.r10,
    padding: 20,
    gap: Gaps.g20,
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.semibold,
    fontSize: Fonts.f18,
  },
  text: {
    color: Colors.white,
    fontFamily: Fonts.regular,
    fontSize: Fonts.f14,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
