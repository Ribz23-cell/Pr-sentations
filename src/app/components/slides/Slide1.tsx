import { TrendingUp, Target, DollarSign } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide1() {
  return (
    <div className="w-full max-w-6xl bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl shadow-2xl p-12 md:p-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Votre audience ne vous rapporte rien ?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-2xl md:text-3xl mb-12 text-blue-100 font-light"
        >
          Transformons votre présence digitale en <span className="font-bold text-yellow-300">machine à génération de leads</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-16"
        >
          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
            <TrendingUp className="w-8 h-8 text-yellow-300" />
            <div className="text-left">
              <div className="text-3xl font-bold">+247%</div>
              <div className="text-sm text-blue-100">Croissance moyenne</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
            <Target className="w-8 h-8 text-yellow-300" />
            <div className="text-left">
              <div className="text-3xl font-bold">ROI-First</div>
              <div className="text-sm text-blue-100">Approche performante</div>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl">
            <DollarSign className="w-8 h-8 text-yellow-300" />
            <div className="text-left">
              <div className="text-3xl font-bold">-60%</div>
              <div className="text-sm text-blue-100">Coûts vs Europe</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
