import { BarChart, Users, TrendingUp, Target } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide4() {
  const stats = [
    { icon: Users, value: '127K+', label: 'Abonnés générés', subtext: 'Sur 18 clients actifs', color: 'blue' },
    { icon: TrendingUp, value: '+247%', label: 'Croissance moyenne', subtext: 'Audience en 6 mois', color: 'green' },
    { icon: Target, value: '2 847', label: 'Leads qualifiés', subtext: 'Capturés ce trimestre', color: 'purple' },
    { icon: BarChart, value: '4.2%', label: 'Taux de conversion', subtext: 'Moyenne sur nos campagnes', color: 'orange' }
  ];

  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'from-blue-500 to-blue-600', text: 'text-blue-600', border: 'border-blue-300' },
    green: { bg: 'from-green-500 to-green-600', text: 'text-green-600', border: 'border-green-300' },
    purple: { bg: 'from-purple-500 to-purple-600', text: 'text-purple-600', border: 'border-purple-300' },
    orange: { bg: 'from-orange-500 to-orange-600', text: 'text-orange-600', border: 'border-orange-300' }
  };

  return (
    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-12 md:p-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">Nos Chiffres Clés</h2>
        <p className="text-xl text-slate-600 mb-12">Résultats concrets, mesurables et vérifiables</p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const colors = colorMap[stat.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gradient-to-br ${colors.bg} p-8 rounded-2xl text-white hover:scale-105 transition-transform shadow-lg`}
              >
                <Icon className="w-10 h-10 mb-4 opacity-90" />
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-90">{stat.subtext}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-8 border-2 border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            Performance en temps réel
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-slate-600 mb-1">Temps de réponse moyen</div>
              <div className="text-3xl font-bold text-slate-900">{'<'} 2h</div>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-1">Taux de satisfaction client</div>
              <div className="text-3xl font-bold text-slate-900">96%</div>
            </div>
            <div>
              <div className="text-sm text-slate-600 mb-1">Renouvellements contrats</div>
              <div className="text-3xl font-bold text-slate-900">89%</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm">
            * Données agrégées sur les 12 derniers mois (Mai 2025 - Mai 2026)
          </p>
        </div>
      </motion.div>
    </div>
  );
}
