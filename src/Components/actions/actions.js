export const ADD_TODO = "ADD_TODO"
export const addTodo =( message) => ({
  type: ADD_TODO,
  message,
  id:Math.floor(Math.random() * 100),
});
export const DELETE_TODO = "DELETE_TODO";
export const deleteTodo = (id )=>({
    type:DELETE_TODO,
    id,
})
export const EDIT_TODO = "EDIT_TODO";
export const editTodo = (id,message)=>({
  type:EDIT_TODO,
  message,
  id,
})

