import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TodoScreen from './TodoList';
import AddTodoScreen from './AddTodo';

const Tab = createBottomTabNavigator();

const MainTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TodoList"
        component={TodoScreen}
      />
      <Tab.Screen
        name="AddTodo"
        component={AddTodoScreen}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;