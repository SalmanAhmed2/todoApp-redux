import React, { useState } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/actions";
import { editTodo } from "../actions/actions";
const TodoList = (props) => {
  const [editable, setEditable] = useState(false);
  let [editmsg, setEditMsg] = useState("");
  return (
    <ul>
      {props.todos.map((items, id) => (
        <>
          <li key={items.id}>
            {editable && items.id === editmsg.id ? (
              <input
                className="edit-input"
                type="text"
                value={editmsg.message}
                onChange={(e) =>
                  setEditMsg({ id: editmsg.id, message: e.target.value })
                }
              />
            ) : (
              items.message
            )}
            <div className="buttons">
              <button
                onClick={() => {
                  setEditable(!editable);
                  setEditMsg(items);
                  props.dispatch(editTodo(items.id, editmsg.message));
                }}
              >
                {editable ? "Update" : "Edit"}
              </button>
              <button onClick={() => props.dispatch(deleteTodo(items.id))}>
                Delete
              </button>
            </div>
          </li>
        </>
      ))}
    </ul>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos.data,
});

export default connect(mapStateToProps)(TodoList);
