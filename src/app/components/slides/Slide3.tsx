import { Eye, MessageCircle, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide3() {
  return (
    <div className="w-full max-w-6xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-12 md:p-16 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Nos Objectifs Clients</h2>
        <p className="text-xl text-slate-300 mb-12">Chaque action stratégique vise un résultat concret</p>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 rounded-2xl hover:scale-105 transition-transform"
          >
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">1. Visibilité Ciblée</h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              Atteindre <strong>votre audience idéale</strong> là où elle se trouve :
              LinkedIn pour le B2B, Instagram/TikTok pour le B2C, avec un contenu qui capte l'attention immédiatement.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-sm text-blue-200">KPI Clé</div>
              <div className="text-xl font-bold">Portée qualifiée +180%</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 rounded-2xl hover:scale-105 transition-transform"
          >
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">2. Engagement d'Intention</h3>
            <p className="text-purple-100 text-lg leading-relaxed">
              Créer des <strong>conversations à forte valeur</strong> qui révèlent l'intérêt d'achat.
              Chaque commentaire, DM et réaction est une opportunité tracée.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-sm text-purple-200">KPI Clé</div>
              <div className="text-xl font-bold">Taux d'engagement 12%+</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-green-600 to-green-700 p-8 rounded-2xl hover:scale-105 transition-transform"
          >
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">3. Conversion</h3>
            <p className="text-green-100 text-lg leading-relaxed">
              Transformer l'audience en <strong>clients payants</strong> via des tunnels optimisés,
              du retargeting intelligent et des CTA irrésistibles.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="text-sm text-green-200">KPI Clé</div>
              <div className="text-xl font-bold">Taux de conversion 3-8%</div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 text-center bg-yellow-500/20 border border-yellow-500/50 rounded-xl p-6">
          <p className="text-lg font-semibold">
            🎯 Objectif ultime : <span className="text-yellow-300">Réduire votre CAC (Coût d'Acquisition Client) de 40% en 90 jours</span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
