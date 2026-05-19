import { Rocket, Globe, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide2() {
  return (
    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-12 md:p-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-4 mb-8">
          <Rocket className="w-12 h-12 text-blue-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">Qui nous sommes</h2>
        </div>

        <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed">
          Une agence de <span className="font-bold text-blue-600">Community Management nouvelle génération</span> basée à Madagascar,
          spécialisée dans la conversion et l'acquisition client.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200"
          >
            <Globe className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Notre Vision</h3>
            <p className="text-slate-700 text-lg leading-relaxed">
              Fini les posts passifs qui ne convertissent pas. Nous créons des <strong>écosystèmes digitaux performants</strong>
              qui transforment chaque interaction en opportunité commerciale mesurable.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-200"
          >
            <Zap className="w-10 h-10 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Notre Différence</h3>
            <p className="text-slate-700 text-lg leading-relaxed">
              Combinaison unique : <strong>expertise internationale</strong>, tarifs Madagascar compétitifs (-60% vs Europe),
              et maîtrise des outils d'IA et d'automatisation pour maximiser votre ROI.
            </p>
          </motion.div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
          <p className="text-lg text-slate-800 font-medium">
            💡 <strong>Notre promesse :</strong> Des résultats mesurables en moins de 60 jours, ou on ajuste la stratégie sans frais supplémentaires.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
