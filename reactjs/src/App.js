import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import TodoList from "./components/TodoList";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <TodoContextProvider>
          <TodoList />
        </TodoContextProvider>
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
