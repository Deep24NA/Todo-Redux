import { createSlice, nanoid } from "@reduxjs/toolkit";

// Load saved todos
const loadTodos = () => {
  try {
    const stored = localStorage.getItem("todos");
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
};

// Save todos
const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const initialState = {
  todos: loadTodos(),
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        completed: false,
      };
      state.todos.push(todo);
      saveTodos(state.todos);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      saveTodos(state.todos);
    },

    updateTodo: (state, action) => {
      const { id, newText } = action.payload; // ✅ fixed key
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.text = newText;
      }
      saveTodos(state.todos);
    },

    toggle: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      saveTodos(state.todos);
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggle } = todoSlice.actions;
export default todoSlice.reducer;




// import { createSlice , nanoid } from "@reduxjs/toolkit";    
// // load the save items
// const loadTodos  = () =>{
//     try{
//         const stored = localStorage.getItem("todos");
//         return stored ? JSON.parse(stored) : [];
//     }catch{
//         return [];
//     }
// }

// // save the items in local storage

// const saveTodo = (todos) =>{
//     localStorage.setItem("todos" , JSON.stringify(todos))
// }



// export const initialState = {
//     todos: loadTodos(),
// };

// const sliceTodo = createSlice({
//     name: "todo",
//     initialState,
//     reducers:{
//         addTodo : (state , action ) =>{
//             const todo = {
//                 id:nanoid(),
//                 text:action.payload,
//                 completed: false
//             }
//             state.todos.push(todo)
//             saveTodo(state.todos)
//         },

//         removeTodo: (state , action) =>{
//            state.todos = state.todos.filter(
//             (todo) => todo.id !== action.payload
//            )
//            saveTodo(state.todos)
//         },

//         updateTodo: (state , action) => {
//             const {id , newTxt} = action.payload
//             const etodo = state.todos.find((todo) => todo.id === id);

//             if(etodo) etodo.text = newTxt;

//             saveTodo(state.todos)
//         },

//         toggle: (state , action) => {
//             const ctodo = state.todos.find((t) => t.id === action.payload);
//             if(ctodo) {
//                 ctodo.completed = !ctodo.completed;
//                 saveTodo(state.todos)
//             }
//         }

//     }

// })


// export const {addTodo , removeTodo , toggle , updateTodo} = sliceTodo.actions

// export default sliceTodo.reducer;