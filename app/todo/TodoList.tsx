import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TodoListProps {
  todo: string;
}

const TodoList: React.FC<TodoListProps> = ({ todo }) => {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{todo}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  todoText: {
    fontSize: 16,
    color: '#333',
  },
});

export default TodoList;