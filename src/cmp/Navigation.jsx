import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navigation = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav className="border-b p-4 dark:bg-gray-800 dark:border-gray-700">
      <div className="container mx-auto flex gap-4">
        <Link 
          to="/" 
          className="text-gray-800 dark:text-white hover:text-blue-600 font-medium"
        >
          Blogs
        </Link>
        <Link 
          to="/create" 
          className="text-gray-800 dark:text-white hover:text-blue-600 font-medium"
        >
          Create
        </Link>
        <button
          onClick={toggleDarkMode}
          className="ml-auto text-gray-800 dark:text-white"
        >
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navigation; 