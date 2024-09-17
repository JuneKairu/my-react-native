import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface TodoInputProps {
  onAddTodo: (todo: string) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ onAddTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState('');

  const todoInputHandler = (enteredText: string) => {
    setEnteredTodo(enteredText);
  };

  const addTodoHandler = () => {
    if (enteredTodo.trim().length === 0) {
      return;
    }
    onAddTodo(enteredTodo);
    setEnteredTodo('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="What do you need to do?"
        style={styles.input}
        onChangeText={todoInputHandler}
        value={enteredTodo}
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.addButton} onPress={addTodoHandler}>
        <Text style={styles.addButtonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    flex: 1,
    height: 40,
    borderBottomColor: 'transparent',
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TodoInput;