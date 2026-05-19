import { Check, X } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide8() {
  const comparisons = [
    { feature: 'Objectif principal', us: 'Génération de leads & conversions', them: 'Augmenter les likes' },
    { feature: 'Stratégie de contenu', us: 'Orientée ROI avec CTA clairs', them: 'Posts esthétiques sans direction' },
    { feature: 'Mesure performance', us: 'Conversion, CAC, ROAS, revenus', them: 'Likes, vues, portée' },
    { feature: 'Création contenu', us: 'IA-assisted, data-driven', them: 'Inspiration Pinterest' },
    { feature: 'Publication', us: 'Moments optimaux analytics', them: 'Calendrier fixe' },
    { feature: 'Engagement', us: 'Ciblé sur prospects qualifiés', them: 'Réponse passive' },
    { feature: 'Publicités', us: 'Tests A/B, optimisation ROAS', them: 'Budget sans stratégie' },
    { feature: 'Reporting', us: 'Dashboard temps réel', them: 'PDF mensuel basique' }
  ];

  return (
    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-h-[85vh] overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">Notre Méthodologie</h2>
        <p className="text-base text-slate-600 mb-6">"Résultats-First" vs Community Manager Classique</p>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200">
                <th className="text-left py-3 px-3 text-slate-600 font-semibold"></th>
                <th className="text-center py-3 px-3">
                  <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold">
                    ✨ Notre Approche
                  </div>
                </th>
                <th className="text-center py-3 px-3">
                  <div className="bg-slate-200 text-slate-600 px-4 py-2 rounded-lg font-semibold">
                    CM Classique
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((item, index) => (
                <motion.tr
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-slate-100 hover:bg-slate-50 transition-colors"
                >
                  <td className="py-3 px-3 font-semibold text-slate-800 text-xs">{item.feature}</td>
                  <td className="py-3 px-3">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-xs">{item.us}</span>
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-500 text-xs">{item.them}</span>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 border border-green-200">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🎯</div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Le Verdict</h3>
              <p className="text-sm text-slate-700">
                Pendant que les autres comptent les likes, <strong className="text-green-700">nous comptons vos nouveaux clients</strong>.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
