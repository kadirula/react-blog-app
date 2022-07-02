import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyBlogs from './pages/MyBlogs';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <>
      <Header />

      <div className="container mx-auto py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-blogs" element={<MyBlogs />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
