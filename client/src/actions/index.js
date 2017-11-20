import axios from 'axios';
import { FETCH_TODOS, CREATE_TODO } from './types';
import sanity from "../lib/sanity";


export const fetchTodos = (dispatch) => {
    const query = `*[_type == "todo"] {
  _id,
  task,
  description,
  completed
}
`;
    return (dispatch) => {
        sanity.fetch(query)
            .then((res) => {
                dispatch({type: FETCH_TODOS, payload: res});
            })
    }
};

export const createTodo =  (dispatch, doc) => {
    const query = `*[_type == "todo"] {
  _id,
  task,
  description,
  completed
}
`;


    return (dispatch) => {
        sanity.fetch(query)
            .then((res) => {
                dispatch({type: FETCH_TODOS, payload: res});
            })
    }

    // if we dont return the fn with dispatch we gan an error
    //  Actions must be plain objects. Use custom middleware for async actions.

}
