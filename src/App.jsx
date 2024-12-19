import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import HomePage from './routes/HomePage';
import BlogDetails from './routes/BlogDetails';
import CreateBlog from './routes/CreateBlog';
import NotFound from './routes/NotFound';
import Navigation from './cmp/Navigation';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <BlogProvider>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </BlogProvider>
    </ThemeProvider>
  );
}

export default App;
