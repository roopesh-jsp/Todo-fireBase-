import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { db } from "../config/firebase";
import Todo from "./Todo";
import { useAppContext } from "../context/Appcontext";

function Todos() {
  const { user } = useAppContext();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const TodoCollectionRef = collection(db, "Todos");

  async function fetchTodos() {
    try {
      console.log(user);
      const q = query(TodoCollectionRef, where("user", "==", user));

      const data = await getDocs(q);
      setTodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error);
    }
  }

  async function addTodo() {
    try {
      setLoading(true);

      console.log(inputRef.current.value);
      const result = await addDoc(TodoCollectionRef, {
        task: inputRef.current.value,
        user,
        isDone: false,
      });
      inputRef.current.value = "";
      fetchTodos();
      setLoading(false);
    } catch (error) {}
  }

  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <div className="container">
      <h1>Todos</h1>
      <div className="todos_add">
        <input
          type="text"
          name="todo"
          placeholder="new task "
          id=""
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              addTodo();
            }
          }}
        />
        <button onClick={addTodo}>{loading ? "adding" : "add"}</button>
      </div>
      <div className="todos">
        {todos.map((todo) => (
          <Todo todo={todo} key={todo.id} fetchTodos={fetchTodos} />
        ))}
      </div>
    </div>
  );
}

export default Todos;
