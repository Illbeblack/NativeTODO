import { useTodos } from '@/entities/store/useTodo';
import CustomSubmit from '@/shared/CustomSubmit/CustomSubmit';
import Header from '@/shared/Header/Header';
import Input from '@/shared/Input/Input';
import { Colors, Fonts, Gaps, Radius } from '@/shared/tokens';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function AddTodo() {
  const [createTodo] = useTodos((state) => [state.createTodo]);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  // Function to Add Task
  function addTask() {
    if (!title) {
      return;
    }
    createTodo(title, text);

    setTitle('');
    setText('');
  }
  return (
    <View>
      <Header header="ADD TODO" />
      <View style={styles.container}>
        <Input value={title} onChangeText={setTitle} placeholder="New Task" />
        <Input value={text} onChangeText={setText} placeholder="About Task" />
        <CustomSubmit href={'/'} lable="ADD" onPress={() => addTask()} />
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
