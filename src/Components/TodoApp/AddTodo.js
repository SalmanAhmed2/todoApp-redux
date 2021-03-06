import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actions";

function AddTodo(props) {
  return (
    <div>
      <h1> ToDo App </h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let input = event.target.todos.value;
          props.dispatch(addTodo(input));
          event.target.todos.value = "";
        }}
      >
        <input
          className="form-input"
          placeholder="Add Items"
          type="text"
          name="todos"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
export default connect(null)(AddTodo);
