import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center dark:bg-gray-900">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex gap-2">
          <motion.div
            className="w-4 h-4 rounded-full bg-blue-500"
            animate={{
              y: [-10, 0, -10],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0,
            }}
          />
          <motion.div
            className="w-4 h-4 rounded-full bg-blue-500"
            animate={{
              y: [-10, 0, -10],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.2,
            }}
          />
          <motion.div
            className="w-4 h-4 rounded-full bg-blue-500"
            animate={{
              y: [-10, 0, -10],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: 0.4,
            }}
          />
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Loading...</p>
      </motion.div>
    </div>
  );
};

export default Loading; 