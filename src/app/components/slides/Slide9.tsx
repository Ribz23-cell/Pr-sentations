import { TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export default function Slide9() {
  const audienceData = [
    { month: 'Mois 1', followers: 2400, engagement: 180 },
    { month: 'Mois 2', followers: 4200, engagement: 420 },
    { month: 'Mois 3', followers: 7800, engagement: 890 },
    { month: 'Mois 4', followers: 12500, engagement: 1650 },
    { month: 'Mois 5', followers: 18900, engagement: 2840 },
    { month: 'Mois 6', followers: 27300, engagement: 4370 }
  ];

  return (
    <div className="w-full max-w-6xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-8 md:p-10 text-white max-h-[85vh] overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-8 h-8 text-green-400" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">Cas de Succès Client</h2>
            <p className="text-sm text-slate-300 mt-1">E-commerce Mode • Secteur B2C • Budget Organique</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-green-600 to-green-700 p-4 rounded-xl"
          >
            <div className="text-xs text-green-100 mb-1">Croissance Abonnés</div>
            <div className="text-2xl font-bold mb-0.5">+1 038%</div>
            <div className="text-xs text-green-200">2 400 → 27 300 en 6 mois</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl"
          >
            <div className="text-xs text-blue-100 mb-1">Engagement Moyen</div>
            <div className="text-2xl font-bold mb-0.5">16.3%</div>
            <div className="text-xs text-blue-200">vs 2.1% industrie</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-br from-purple-600 to-purple-700 p-4 rounded-xl"
          >
            <div className="text-xs text-purple-100 mb-1">Leads Générés</div>
            <div className="text-2xl font-bold mb-0.5">1 247</div>
            <div className="text-xs text-purple-200">CAC : 4.20€</div>
          </motion.div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
          <h3 className="text-lg font-bold mb-4 text-white">Progression de l'Audience</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={audienceData}>
              <defs>
                <linearGradient id="colorFollowers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="month" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1e293b',
                  border: '1px solid #475569',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Area
                type="monotone"
                dataKey="followers"
                stroke="#3b82f6"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorFollowers)"
                name="Abonnés"
              />
              <Area
                type="monotone"
                dataKey="engagement"
                stroke="#10b981"
                strokeWidth={3}
                fillOpacity={1}
                fill="url(#colorEngagement)"
                name="Engagement"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-5 bg-yellow-500/20 border border-yellow-500 rounded-lg p-4">
          <p className="text-sm font-semibold text-yellow-100">
            📊 <strong>Stratégie appliquée :</strong> 18 Reels/mois + 12 posts LinkedIn + Community engagement actif.
            Aucun budget publicitaire, 100% organique.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
