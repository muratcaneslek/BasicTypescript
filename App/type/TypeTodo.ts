export interface Todo {
  id: string;
  text: string;
}

export interface ToDoState{
  todos: Todo[];
}

export interface TodoListItem{
  todolistitem: Todo;
}