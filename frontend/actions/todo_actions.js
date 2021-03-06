export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO"
import * as APIUtil from "../util/todo_api_util.js"
import { receiveErrors } from "./error_actions.js";

export const receiveTodos = (todos) => {
    return {
      type: RECEIVE_TODOS,
      todos,
    };
};

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO,
        todo,
    }
}
export const removeTodo = (todo) => {
    return {
        type: REMOVE_TODO,
        todo,
    }
}

// thunk action creators

export const fetchToDos = () => (dispatch, getState) => {
    return APIUtil.fetchToDos().then( todos => {
        return dispatch(receiveTodos(todos))
    })
}

export const createTodo = (todo) => (dispatch, getState) => {
    return APIUtil.createTodo(todo).then( 
        todo => dispatch(receiveTodo(todo)),
        err => dispatch(receiveErrors(err.responseJSON))
    )
}