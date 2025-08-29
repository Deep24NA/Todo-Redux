import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo, toggle } from "../features/todoSlice";

function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = (id) => {
    if (!editText || !editText.trim()) return; // prevent empty updates
    dispatch(updateTodo({ id, newText: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <div>
      <ul className="space-y-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
          >
            <div className="flex items-center gap-3 flex-1">
              {/* Toggle complete */}
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggle(todo.id))}
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
              />

              {/* Editing mode or normal text */}
              {editId === todo.id ? (
                <input
                  type="text"
                  value={editText ?? ""}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span
                  className={`flex-1 text-base md:text-lg ${
                    todo.completed
                      ? "line-through text-gray-400 dark:text-gray-500"
                      : "text-gray-700 dark:text-gray-200"
                  }`}
                >
                  {todo.text}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 ml-4">
              {editId === todo.id ? (
                <>
                  <button
                    onClick={() => handleUpdate(todo.id)}
                    className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => {
                      setEditId(null);
                      setEditText(""); // ✅ reset cleanly
                    }}
                    className="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setEditId(todo.id);
                      setEditText(todo.text ?? ""); // ✅ ensure string
                    }}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm md:text-base">
          No todos yet. Add one above!
        </p>
      )}
    </div>
  );
}

export default Todos;



// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { removeTodo, updateTodo, toggle } from "../features/todoSlice";

// function Todos() {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);

//   // Track which todo is being edited
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState("");

//   const handleUpdate = (id) => {
//     if (!editText || !editText.trim()) return;
//     dispatch(updateTodo({ id, newText: editText }));
//     setEditId(null);
//     setEditText("");
//   };

//   return (
//     <div>
//       <ul className="space-y-4">
//         {todos.map((todo) => (
//           <li
//             key={todo.id}
//             className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition duration-300"
//           >
//             <div className="flex items-center gap-3 flex-1">
//               {/* Toggle complete */}
//               <input
//                 type="checkbox"
//                 checked={todo.completed}
//                 onChange={() => dispatch(toggle(todo.id))}
//                 className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500 cursor-pointer"
//               />

//               {/* Editing mode or normal text */}
//               {editId === todo.id ? (
//                 <input
//                   type="text"
//                   value={editText ?? ""}   // 👈 ensures it's always a string
//                   onChange={(e) => setEditText(e.target.value)}
//                   className="flex-1 px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />

//               ) : (
//                 <span
//                   className={`flex-1 text-base md:text-lg ${todo.completed
//                       ? "line-through text-gray-400 dark:text-gray-500"
//                       : "text-gray-700 dark:text-gray-200"
//                     }`}
//                 >
//                   {todo.text}
//                 </span>
//               )}
//             </div>

//             {/* Actions */}
//             <div className="flex items-center gap-3 ml-4">
//               {editId === todo.id ? (
//                 <>
//                   <button
//                     onClick={() => handleUpdate(todo.id)}
//                     className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
//                   >
//                     Save
//                   </button>
//                   <button
//                     onClick={() => {
//                       setEditId(null);
//                       setEditText(todo.text ?? "");
//                     }}
//                     className="px-3 py-1 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
//                   >
//                     Cancel
//                   </button>
//                 </>
//               ) : (
//                 <>
//                   <button
//                     onClick={() => {
//                       setEditId(todo.id);
//                       setEditText(todo.text);
//                     }}
//                     className="px-3 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => dispatch(removeTodo(todo.id))}
//                     className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
//                   >
//                     Delete
//                   </button>
//                 </>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>

//       {todos.length === 0 && (
//         <p className="text-center text-gray-500 dark:text-gray-400 mt-6 text-sm md:text-base">
//           No todos yet. Add one above!
//         </p>
//       )}
//     </div>
//   );
// }

// export default Todos;
