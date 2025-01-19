import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React from "react";
import { db } from "../config/firebase";

function Todo({ todo, fetchTodos }) {
  const docRef = doc(db, "Todos", todo.id);
  async function toggleTodo() {
    await updateDoc(docRef, {
      isDone: !todo.isDone,
    });
    fetchTodos();
  }

  async function deleteTodo() {
    await deleteDoc(docRef);
    fetchTodos();
  }
  return (
    <div className="todo">
      <h3 className="task" onClick={toggleTodo}>
        <input type="checkbox" checked={todo.isDone} />
        <span>{todo.task}</span>
      </h3>
      <div className="cta">
        {/* <button>edit</button> */}
        <button onClick={deleteTodo}>del</button>
      </div>
    </div>
  );
}

export default Todo;
