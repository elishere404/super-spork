import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center dark:bg-gray-900">
      <h1 className="text-6xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Page not found</p>
      <Link 
        to="/" 
        className="text-blue-500 hover:underline dark:text-blue-400"
      >
        ←back to home
      </Link>
    </div>
  );
};

export default NotFound; 