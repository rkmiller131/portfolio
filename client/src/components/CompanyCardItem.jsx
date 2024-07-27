import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useTheme } from '../DarkThemeContext.jsx';

export default function CompanyCardItem({ url, img }) {
  const darkMode = useTheme();
  const industrySectionRef = useRef(null);
  const isInView = useInView(industrySectionRef, { once: true});
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView])

  return (
    <motion.div
      ref={industrySectionRef}
      className={darkMode ? 'company-item-container dark' : 'company-item-container'}
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.5 }}
    >
      <div className="company-item-card">
        <a href={url} target="_blank">
          <div className="company-logo" style={{ backgroundImage: `url('${img}')` }}/>
        </a>
      </div>
    </motion.div>
  )
}