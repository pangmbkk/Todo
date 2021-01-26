import TodoForm from './components/TodoForm';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import axios from 'axios'


function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <TodoForm /> */}
      <TodoList />
    </div>
  );
}

export default App;
