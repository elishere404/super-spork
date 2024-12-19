import { useParams, Link } from 'react-router-dom';
import { useBlogContext } from '../context/BlogContext';
import Loading from './Loading';

const BlogDetails = () => {
  const { id } = useParams();
  const { blogs, isLoading } = useBlogContext();
  
  if (isLoading) {
    return <Loading />;
  }
  
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-4 dark:bg-gray-900 min-h-screen">
      <Link 
        to="/" 
        className="inline-block mb-6 text-blue-500 hover:underline dark:text-blue-400"
      >
        ←back
      </Link>
      
      <article className="max-w-2xl">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">{blog.title}</h1>
        <div className="mt-4">
          <p className="text-gray-700 dark:text-gray-300">{blog.description}</p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails; 