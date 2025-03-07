import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (input.trim() === "") return;
    if (editIndex !== null) {
      const updatedTodos = todos.map((todo, index) => 
        index === editIndex ? input : todo
      );
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, input]);
    }
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Todo App</h2>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        placeholder="Enter todo" 
      />
      <button onClick={addTodo}>{editIndex !== null ? "Update" : "Add"}</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
