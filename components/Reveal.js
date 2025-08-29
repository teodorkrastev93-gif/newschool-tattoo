'use client';
import { motion } from 'framer-motion';

export default function Reveal({
  children,
  delay = 0,
  y = 16,
  once = true,
  className = ''
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      viewport={{ once, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
