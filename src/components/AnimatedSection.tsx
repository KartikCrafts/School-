import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface AnimatedBoxProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  amount?: number;
}

export const AnimatedBox: React.FC<AnimatedBoxProps> = ({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  amount = 0.15,
  ...props
}) => {
  const getVariants = () => {
    switch (direction) {
      case 'up':
        return {
          hidden: { opacity: 0, y: 36, scale: 0.98 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case 'down':
        return {
          hidden: { opacity: 0, y: -36, scale: 0.98 },
          visible: { opacity: 1, y: 0, scale: 1 },
        };
      case 'left':
        return {
          hidden: { opacity: 0, x: -36 },
          visible: { opacity: 1, x: 0 },
        };
      case 'right':
        return {
          hidden: { opacity: 0, x: 36 },
          visible: { opacity: 1, x: 0 },
        };
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.92 },
          visible: { opacity: 1, scale: 1 },
        };
      case 'fade':
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        };
    }
  };

  const variants = getVariants();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      // viewport with once: false ensures it re-animates EVERY time on scroll up and down!
      viewport={{ once: false, amount }}
      variants={variants}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const AnimatedImage: React.FC<{
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  delay?: number;
}> = ({ src, alt, className = '', containerClassName = '', delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.93, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden ${containerClassName}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover transition-transform duration-700 hover:scale-105 ${className}`}
      />
    </motion.div>
  );
};
