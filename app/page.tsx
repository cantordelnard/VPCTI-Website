'use client';

import Image from 'next/image';
import { Phone, Mail } from 'lucide-react';
import { 
  motion,
  useAnimation,
  useInView,
  useMotionValueEvent,
  useScroll,
  useTransform,
  AnimatePresence
} from 'framer-motion';
import { useEffect, useRef } from 'react';

// Client-side only component for year
const CurrentYear = () => {
  return <>{new Date().getFullYear()}</>;
};

export default function Home() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-ios-blue-50 p-4">
      <motion.div 
        ref={ref}
        className="max-w-2xl mx-auto text-center flex-1 flex flex-col justify-center"
        initial="hidden"
        animate={controls}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Logo with subtle animation */}
        <motion.div 
          className="mb-8 flex justify-center"
          variants={variants}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <Image
            src="/images/vpcti-logo.svg"
            alt="VPCTI Construction"
            width={100}
            height={100}
            className="object-contain"
            priority
          />
        </motion.div>

        <div className="space-y-6">
          {/* Heading */}
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-ios-blue-800"
            variants={variants}
            transition={{ duration: 0.5 }}
          >
            New Website Coming Soon
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            className="text-xl text-ios-blue-600 max-w-lg mx-auto"
            variants={variants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're building an improved digital experience for you.
          </motion.p>

          {/* Contact items */}
          <div className="flex flex-col items-center space-y-4 pt-4">
            <motion.div 
              className="flex items-center space-x-3"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="p-3 rounded-full bg-ios-blue-100">
                <Phone className="w-5 h-5 text-ios-blue-600" />
              </div>
              <span className="text-lg font-medium text-ios-blue-700">
                8952 0883
              </span>
            </motion.div>
            
            <motion.div 
              className="flex items-center space-x-3"
              variants={variants}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="p-3 rounded-full bg-ios-blue-100">
                <Mail className="w-5 h-5 text-ios-blue-600" />
              </div>
              <span className="text-lg font-medium text-ios-blue-700">
                vpowerconstruction12@gmail.com
              </span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <motion.div 
        className="mt-12 pt-6 border-t border-ios-blue-200 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-sm text-ios-blue-500">
          © <CurrentYear /> VPower Construction and Trading Inc. All rights reserved.
        </p>
        <p className="text-sm text-ios-blue-400 mt-1">
          Developed by Delnard Cantor
        </p>
      </motion.div>
    </div>
  );
}