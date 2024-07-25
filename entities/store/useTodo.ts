import { create } from 'zustand';

export interface Todo {
  id: number;
  title: string;
  text?: string;
  completed: boolean;
}

export interface TodoStore {
  todos: Todo[];
  createTodo: (title: string, text?: string) => void;
  updateTodo: (id: number, title: string, text?: string) => void;
  removeTodo: (id: number) => void;
  toggleCompleted: (id: number) => void;
}

export const useTodos = create<TodoStore>((set, get) => ({
  todos: [
    { id: 1, title: 'Doctor Appointment', text: 'Appointment at 20:00', completed: true },
    {
      id: 2,
      title: 'Meeting at School',
      text: 'Meeting at school at 17:00 on friday',
      completed: false,
    },
  ],

  createTodo: (title, text?) => {
    const { todos } = get();
    const newTodo = { id: Date.now(), title, text: text ? text : '', completed: false };
    set({ todos: todos.concat(newTodo) });
  },

  updateTodo: (id, title, text?) => {
    const { todos } = get();
    set({
      todos: todos.map((todo) => ({
        ...todo,
        title: todo.id === id ? title : todo.title,
        text: todo.id === id && text ? text : todo.text,
      })),
    });
  },

  removeTodo: (id) => {
    const { todos } = get();
    set({
      todos: todos.filter((todo) => todo.id !== id),
    });
  },
  toggleCompleted: (id: number) => {
    const { todos } = get();
    set({
      todos: todos.map((todo) => ({
        ...todo,
        completed: todo.id === id ? !todo.completed : todo.completed,
      })),
    });
  },
}));
