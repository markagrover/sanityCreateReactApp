import React from "react";
import Todo from "./Todo";

const query = `*[_type == "todo"] {
  _id,
  task,
  description,
  completed
}
`;
function showTodos({todos, todoActions}) {
    if (todos) {
        return todos.map((todo, i) => {
            return (
                <Todo todoActions={todoActions} key={i} todo={todo} />
            );
        });
    } else {
        return (<div>"Loading..."</div>);
    }
}

const Todos = (props) => {
  // async deleteMe(e) {
  //     const id = e.target.dataset.id;
  //     const url = `https://3ephgmi3.api.sanity.io/v1/data/mutate/todo`;
  //     const deleteQuery = {
  //         id: id
  //     };
  // }

    return (
      <div>
        <h2>Todos</h2>
        <div>{showTodos(props)}</div>
      </div>
    );
}

export default Todos;

