import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Page1() {
  const [balloons, setBalloons] = useState([]);

  useEffect(() => {
    const b = Array.from({ length: 20 }, () => ({
      left: Math.random() * 90 + "%",
      delay: Math.random() * 5,
      color: ["#ff4d4d", "#ffb84d", "#4dff88", "#4da6ff", "#b84dff"][Math.floor(Math.random()*5)]
    }));
    setBalloons(b);
  }, []);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-pink-200 to-white relative overflow-hidden flex flex-col justify-center items-center">
      {balloons.map((balloon, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full w-10 h-14"
          style={{ left: balloon.left, backgroundColor: balloon.color }}
          animate={{ y: [-50, -300] }}
          transition={{ duration: 6 + Math.random() * 4, repeat: Infinity, delay: balloon.delay }}
        />
      ))}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="text-center"
      >
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">Happy Birthday Satya! 🎉</h1>
        <p className="text-xl text-gray-700">“May your day be filled with love, joy, and success!”</p>
      </motion.div>
    </div>
  );
}
