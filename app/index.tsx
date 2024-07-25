import Header from '@/shared/Header/Header';
import { Colors, Fonts } from '@/shared/tokens';
import TodoList from '@/widget/ui/TodoList/TodoList';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function MainPage() {
  return (
    <View>
      <ScrollView>
        <Header header="TODO LIST" />
        <TodoList />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.primary,
    alignSelf: 'center',
    marginBottom: 50,
    fontFamily: Fonts.semibold,
    fontSize: Fonts.f18,
  },
});
