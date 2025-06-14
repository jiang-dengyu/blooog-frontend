/*src/App.jsx*/
import './App.css'
import { HashRouter, BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react';

import Home from './pages/HomePage';
import Posts from './pages/PostsPage';
import PostDetail from './pages/PostDetail';
import NewPost from './pages/NewPost';
import Gallery from './pages/Gallery';
import Header from './components/Header';
import Footer from './components/Footer';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
        {showSplash ? (
          <SplashScreen onFinish={() => setShowSplash(false)} />
        ) : (
          <HashRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/posts" element={<Posts />} />
              <Route path="/posts/:id" element={<PostDetail />} />
              <Route path="/posts/new" element={<NewPost />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
            <Footer />
          </HashRouter>
        )}
    </> 
  );
}

export default App
