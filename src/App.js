import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Todo from "./pages/todo";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Todo />} />
      <Route path='/about' element={<h1> about page</h1>} />
      <Route path='/login' element={<h1> login page</h1>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
