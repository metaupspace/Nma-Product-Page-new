"use client";

import React from "react";
import { motion } from "framer-motion";

const OutlinedButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{
        y: -2,
        scale: 1.03,
        boxShadow: "0px 6px 18px rgba(0, 119, 255, 0.3)",
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      className="relative px-5 py-2 overflow-hidden font-semibold text-blue-500 rounded-lg"
    >
      {/* Animated border shine */}
      <motion.span
        className="absolute inset-0 border-2 border-blue-500 rounded-lg"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default OutlinedButton;
