import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import MuiMediaCard from './MuiMediaCard.jsx';

export default function ProjectBubble({ project, className }) {
  const bubbleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: bubbleRef,
    // when the top of the target bubble (0 or 'start') reaches the end of the viewport (1 or 'end'), start the animation.
    // next, when the bottom of the target bubble extends 50% (or when we hit the 'center' of the target) beyond the end of the viewport, stop the animation.
    offset: ['0 1', '1.5 1']
  });

  const direction = className === 'left-bubble' ? [1, 0] : [0, 1];
  const transformer = className === 'left-bubble' ? [-45, 0] : [0, 45];

  return (
    <motion.div
      ref={bubbleRef}
      style={{
        x: useTransform(scrollYProgress, direction, transformer)
      }}
      className={className}
    >
      <MuiMediaCard project={project}/>
    </motion.div>
  );

}