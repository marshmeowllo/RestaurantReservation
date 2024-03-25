import { createContext } from 'react';
import { motion } from 'framer-motion';

const marqueeVariants = {
  animate: {
    x: [1440, -1440],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 10,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <motion.div
      className="absolute whitespace-nowrap"
      variants={marqueeVariants}
      animate="animate"
    >
      <p className="pl-2 pr-2 pt-1 pb-1 text-white">
        Let's Work Together. Let's Work Together. Let's Work Together. Let's
        Work Together. Let's Work Together. Let's Work Together. Let's Work
        Together
      </p>
    </motion.div>
  );
};

export default Marquee;
