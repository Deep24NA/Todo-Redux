// import { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { addTodo } from '../features/todoSlice';


// function AddTodo() {
//     const dispatch = useDispatch(

//     )
//     const [items , setItems] = useState("");


//     const add = (e) =>{
//         e.preventDefault();
//         dispatch(addTodo(items));
//         setItems("")
//     }
//   return (
//     <>
//       <form action="">
//         <input
//          value={items}   
//          type="text" 
//          placeholder='write Your Todos...'
//          onChange={(e) => setItems(e.target.value)}
//         />
//         <button
//          onClick={add}  
//         >Add Todo</button>
//       </form>
//     </>
//   )
// }

// export default AddTodo

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const [items, setItems] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!items.trim()) return; // prevent empty todos
    dispatch(addTodo(items));
    setItems("");
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 px-4">
      <form
        onSubmit={add}
        className="flex flex-col sm:flex-row items-center gap-3"
      >
        <input
          value={items}
          type="text"
          placeholder="Write your todo..."
          onChange={(e) => setItems(e.target.value)}
          className="flex-1 w-full px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
        />

        <button
          type="submit"
          className="px-6 py-2 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300 w-full sm:w-auto"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
