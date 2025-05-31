import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/HomePage';
import Posts from './pages/PostsPage';
import Header from './components/Header';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
}

export default App
