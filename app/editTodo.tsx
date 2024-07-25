import { useId } from '@/entities/store/useId';
import { useTodos } from '@/entities/store/useTodo';
import CustomSubmit from '@/shared/CustomSubmit/CustomSubmit';
import { Colors, Fonts, Gaps, Radius } from '@/shared/tokens';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function EditTodo() {
  const [updateTodo, todos] = useTodos((state) => [state.updateTodo, state.todos]);
  const [idNumber] = useId((state) => [state.idNumber]);

  const [todo] = todos.filter((todo) => todo.id === idNumber);

  const [title, setTitle] = useState(todo.title);
  const [text, setText] = useState(todo.text);

  function editTask() {
    if (!title) {
      return;
    }
    updateTodo(idNumber, title, text);
  }
  return (
    <View>
      <Text style={styles.title}>EDIT TODO</Text>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={title}
          onChangeText={setTitle}
          placeholder="New Task"
          placeholderTextColor={'#AFB2BF'}
        />
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="About Task"
          placeholderTextColor={'#AFB2BF'}
        />
        <CustomSubmit href={'/'} lable="Edit" onPress={() => editTask()} />
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
    marginBottom: 20,
    gap: Gaps.g20,
  },
  title: {
    color: Colors.primary,
    alignSelf: 'center',
    marginBottom: 50,
    fontFamily: Fonts.semibold,
    fontSize: Fonts.f18,
  },
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
