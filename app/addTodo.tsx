import { useTodos } from '@/entities/store/useTodo';
import CustomSubmit from '@/shared/CustomSubmit/CustomSubmit';
import { Colors, Fonts, Gaps, Radius } from '@/shared/tokens';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

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
      <Text style={styles.title}>ADD TODO</Text>
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
