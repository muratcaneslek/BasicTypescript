import React, {useState} from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { useDispatch } from 'react-redux';
import {  addTodo as addTodoAction } from '../Redux/Todo-slice';

const AddToDo: React.FC = () => {
    const [newTodo, setNewTodo] = useState<string>('');
    const dispatch = useDispatch();

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            dispatch(addTodoAction({ id: Date.now().toString(), text: newTodo }));
            //Math.random() not really unique - but fine for this example
            setNewTodo('');
        }
    };
     
    return(
        <View style={{margin: 10}}>
            <TextInput placeholder="lütfen texti girin..." value={newTodo} onChangeText={text => setNewTodo(text)} />
            <TouchableOpacity onPress={addTodo}>
                <Text>Ekle</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddToDo;