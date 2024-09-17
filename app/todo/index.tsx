import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import { useRouter } from 'expo-router';

interface TodoItem {
  id: number;
  text: string;
}

export default function TodoListScreen() {
  const router = useRouter();
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = () => {
    if (todo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: todo }]);
      setTodo('');
    }
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const renderItem = ({ item }: { item: TodoItem }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item.text}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTodo(item.id)}>
        <Text style={styles.deleteButtonText}>DELETE</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>TASKS</Text>
      </View>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="What's your plan this time?"
          value={todo}
          onChangeText={setTodo}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>ADD</Text>
        </TouchableOpacity>
        <FlatList
          data={todos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          style={styles.todoList}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#343131',
  },
  header: {
    backgroundColor: '#D8A25E',
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#A04747',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    flex: 1,
    marginLeft: 15,
    marginTop: 20,
    fontSize: 24,
    fontWeight: '900',
    color: '#000',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 25,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
  addButton: {
    backgroundColor: '#A04747',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  todoList: {
    marginTop: 20,
  },
  todoItem: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  todoText: {
    fontSize: 16,
    color: '#333',
  },
  deleteButton: {
    backgroundColor: '#C40C0C',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});