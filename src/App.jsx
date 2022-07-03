import { Toaster } from 'react-hot-toast';
import Header from "./components/Header";
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MyBlogs from './pages/MyBlogs';
import BlogDetail from './pages/BlogDetail';
import Profile from "./pages/Profile";
import CategoryBlog from "./pages/CategoryBlog";
import AuthorBlog from "./pages/AuthorBlog";
import BlogList from "./pages/BlogList";
import BlogAdd from "./pages/BlogAdd";


function App() {
  return (
    <>
      <Toaster position='top-right' />
      
      <Header />

      <div className="container mx-auto py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-blogs" element={<MyBlogs />} />
          <Route path="/blog-detail" element={<BlogDetail />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category-blog" element={<CategoryBlog />} />
          <Route path="/author-blog" element={<AuthorBlog />} />
          <Route path="/blog-list" element={<BlogList />} />
          <Route path="/blog-add" element={<BlogAdd />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
