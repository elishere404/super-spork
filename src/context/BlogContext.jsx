import { createContext, useState, useContext, useEffect } from 'react';

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "blog 1",
      description: "hello this is blog 1",
      likes: 0,
      isLiked: false,
      bookmarked: false
    },
    {
      id: 2,
      title: "blog 2",
      description: "hello this is blog 2",
      likes: 0,
      isLiked: false,
      bookmarked: false
    }
  ]);

  const addBlog = (title, description) => {
    const newBlog = {
      id: blogs.length + 1,
      title,
      description,
      likes: 0,
      isLiked: false,
      bookmarked: false
    };
    setBlogs([...blogs, newBlog]);
  };

  const toggleBookmark = (id) => {
    setBlogs(blogs.map(blog => 
      blog.id === id ? {...blog, bookmarked: !blog.bookmarked} : blog
    ));
  };

  const toggleLike = (id) => {
    setBlogs(blogs.map(blog => 
      blog.id === id ? {
        ...blog, 
        isLiked: !blog.isLiked,
        likes: blog.isLiked ? blog.likes - 1 : blog.likes + 1
      } : blog
    ));
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <BlogContext.Provider value={{ blogs, addBlog, toggleBookmark, toggleLike, isLoading }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => useContext(BlogContext); 