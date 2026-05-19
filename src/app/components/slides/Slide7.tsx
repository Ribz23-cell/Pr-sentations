import { DollarSign, Cpu, TrendingUp, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide7() {
  return (
    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-h-[85vh] overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Pourquoi nous rejoindre ?</h2>
        <p className="text-base text-slate-600 mb-6">Notre valeur unique dans un marché saturé</p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 p-5 rounded-xl border border-green-200"
          >
            <DollarSign className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Tarifs Compétitifs</h3>
            <p className="text-slate-700 text-sm mb-3 leading-relaxed">
              Basés à <strong>Madagascar</strong>, nous offrons une expertise internationale à des tarifs
              <span className="font-bold text-green-600"> 60% moins chers</span>.
            </p>
            <div className="bg-white p-3 rounded-lg shadow-sm text-sm">
              <div className="flex justify-between items-center mb-1">
                <span className="text-slate-600">Agence France/Belgique</span>
                <span className="font-bold text-slate-900">1 500€ - 3 000€</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-semibold">Notre agence</span>
                <span className="font-bold text-green-600 text-base">590€ - 1 290€</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-200"
          >
            <Cpu className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">IA & Automatisation</h3>
            <p className="text-slate-700 text-sm mb-3 leading-relaxed">
              Maîtrise des <strong>outils d'IA</strong> (ChatGPT, MidJourney) et d'automatisation
              (Zapier, Make) pour <span className="font-bold text-blue-600">multiplier notre efficacité</span>.
            </p>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span className="text-slate-700 text-xs">Création de contenu 5x plus rapide</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span className="text-slate-700 text-xs">Veille concurrentielle automatisée</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                <span className="text-slate-700 text-xs">Reporting en temps réel</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-purple-50 to-violet-50 p-5 rounded-xl border border-purple-200"
          >
            <TrendingUp className="w-8 h-8 text-purple-600 mb-2" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Culture de la Performance</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-3">
              Chaque action est <strong>mesurée, analysée, optimisée</strong>. Nous sommes obsédés par vos KPIs
              et nous adaptons en continu.
            </p>
            <div className="bg-purple-100 p-3 rounded-lg">
              <div className="text-xs text-purple-700 font-semibold mb-0.5">Notre engagement</div>
              <div className="text-purple-900 font-bold text-sm">Amélioration continue ou remboursement partiel</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-br from-orange-50 to-amber-50 p-5 rounded-xl border border-orange-200"
          >
            <Award className="w-8 h-8 text-orange-600 mb-2" />
            <h3 className="text-lg font-bold text-slate-900 mb-2">Expertise Multiculturelle</h3>
            <p className="text-slate-700 text-sm leading-relaxed mb-3">
              Équipe formée aux <strong>standards internationaux</strong>, compréhension profonde des marchés
              européens et africains.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="bg-white px-2 py-1 rounded-lg shadow-sm text-xs font-semibold text-slate-700">🇫🇷 France</div>
              <div className="bg-white px-2 py-1 rounded-lg shadow-sm text-xs font-semibold text-slate-700">🇧🇪 Belgique</div>
              <div className="bg-white px-2 py-1 rounded-lg shadow-sm text-xs font-semibold text-slate-700">🇨🇦 Canada</div>
              <div className="bg-white px-2 py-1 rounded-lg shadow-sm text-xs font-semibold text-slate-700">🇲🇬 Madagascar</div>
            </div>
          </motion.div>
        </div>

        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-5 text-white text-center">
          <p className="text-lg font-bold">
            🚀 Résultat : Qualité premium × Prix accessible = Votre avantage compétitif
          </p>
        </div>
      </motion.div>
    </div>
  );
}
