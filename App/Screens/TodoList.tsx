import React from "react";
import { View, Text, FlatList } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../Redux/Todo-slice";
import { ToDoState, TodoListItem } from "../type/TypeTodo";

const ListItem: React.FC<TodoListItem> = ({ todolistitem }) => {
  return (
    <View style={{margin: 10, marginBottom: 0 }}>
      <Text>{todolistitem.text}</Text>
    </View>
  );
};

const ToDoList = () => {
  const todos = useSelector((state: {todo :ToDoState}) => state.todo.todos);
  console.log("Todos from Redux Store:", todos);

  return (
    <View style={{margin: 10}}>
      <Text>Todo List</Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem todolistitem={item} />
        )}
      />
    </View>
  );
};

export default ToDoList;
