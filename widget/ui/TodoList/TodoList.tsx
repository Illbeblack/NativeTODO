import { useTodos } from '@/entities/store/useTodo';
import CustomLink from '@/shared/CustomLink/CustomLink';
import TodoItem from '@/widget/ui/TodoItem/TodoItem';
import { Gaps } from '@/shared/tokens';
import { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function TodoList() {
  const [todos] = useTodos((state) => [state.todos]);

  return (
    <View style={styles.container}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
      <CustomLink href={'addTodo'} text="Add new todo" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 50, gap: Gaps.g50 },
});
