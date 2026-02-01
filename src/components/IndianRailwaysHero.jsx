import { motion } from "framer-motion";

export default function IndianRailwaysHero() {
  return (
    <div className="mt-6">
      <motion.h2
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-blue-700"
      >
        🇮🇳 INDIAN RAILWAYS
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 mt-2"
      >
        Life Line of the Nation
      </motion.p>
    </div>
  );
}
