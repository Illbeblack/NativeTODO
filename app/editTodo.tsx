import { useId } from '@/entities/store/useId';
import { useTodos } from '@/entities/store/useTodo';
import CustomSubmit from '@/shared/CustomSubmit/CustomSubmit';
import Header from '@/shared/Header/Header';
import Input from '@/shared/Input/Input';
import { Colors, Gaps, Radius } from '@/shared/tokens';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

export default function EditTodo() {
  const [updateTodo, todos, toggleCompleted] = useTodos((state) => [
    state.updateTodo,
    state.todos,
    state.toggleCompleted,
  ]);
  const [idNumber] = useId((state) => [state.idNumber]);

  const [todo] = todos.filter((todo) => todo.id === idNumber);

  const [title, setTitle] = useState(todo.title);
  const [text, setText] = useState(todo.text);
  const [completed, setCompleted] = useState(todo.completed);

  function editTask() {
    if (!title) {
      return;
    }
    updateTodo(idNumber, title, text, completed);
  }
  return (
    <View>
      <Header header="EDIT TODO" />
      <View style={styles.container}>
        <Input value={title} onChangeText={setTitle} placeholder="New Task" />
        <Input value={text} onChangeText={setText} placeholder="About Task" />
        <BouncyCheckbox
          isChecked={todo.completed}
          onPress={() => {
            toggleCompleted(todo.id);
            setCompleted(!completed);
          }}
          fillColor="#6C38CC"
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
});
