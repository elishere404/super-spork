import { Link } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';
import { motion } from 'framer-motion';
import Loading from './Loading';

const HomePage = () => {
  const { blogs, toggleLike, toggleBookmark, isLoading } = useBlogContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-3 gap-4">
          {blogs.map((blog, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={blog.id}
              className="border rounded-lg p-4 shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <h2 className="text-xl font-semibold mb-2 dark:text-white">{blog.title}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {blog.description.substring(0, 100)}...
              </p>
              <div className="flex gap-2 mt-4">
                <button 
                  onClick={() => toggleLike(blog.id)} 
                  className="dark:text-white flex items-center gap-1"
                >
                  {blog.isLiked ? '❤️' : '🤍'} {blog.likes}
                </button>
                <button 
                  onClick={() => toggleBookmark(blog.id)} 
                  className="dark:text-white flex items-center gap-1 text-sm"
                >
                  {blog.bookmarked ? '🔖' : '⭐'}
                  <span className="text-gray-600 dark:text-gray-400">
                    {blog.bookmarked ? 'Bookmarked' : 'Bookmark'}
                  </span>
                </button>
              </div>
              <Link 
                to={`/blog/${blog.id}`}
                className="inline-block text-blue-500 hover:underline dark:text-blue-400"
              >
                show more
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 