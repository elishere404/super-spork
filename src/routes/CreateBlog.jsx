import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';
import Confetti from 'react-confetti';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addBlog } = useBlogContext();
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addBlog(title, description);
      setShowConfetti(true);
      setTimeout(() => {
        setShowConfetti(false);
      }, 2000);
      navigate('/');
    }
  };

  return (
    <div className="container mx-auto p-4 min-h-screen flex flex-col items-center justify-center dark:bg-gray-900">
      <Link 
        to="/" 
        className="inline-block mb-6 text-blue-500 hover:underline dark:text-blue-400"
      >
        ←back
      </Link>

      <div className="max-w-xl w-full dark:text-white">
        <h2 className="text-2xl font-bold mb-6 dark:text-white">Create new blog</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          
          <div className="mb-4">
            <textarea
              placeholder="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-2 border rounded h-32 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              required
            />
          </div>
          
          <button 
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create
          </button>
        </form>
      </div>

      {showConfetti && <Confetti />}
    </div>
  );
};

export default CreateBlog; 