
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
          Todo App ✅
        </h1>

        {/* Add Todo Form */}
        <AddTodo />

        {/* Todo List */}
        <div className="mt-8">
          <Todos />
        </div>
      </div>
    </div>
  );
}

export default App;
