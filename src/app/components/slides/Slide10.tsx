import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { motion } from 'motion/react';
import { BarChart3 } from 'lucide-react';

export default function Slide10() {
  const trafficData = [
    { name: 'Réseaux Sociaux Organiques', value: 42, color: '#3b82f6' },
    { name: 'Publicités Payantes', value: 28, color: '#8b5cf6' },
    { name: 'SEO / Google', value: 15, color: '#10b981' },
    { name: 'Email Marketing', value: 10, color: '#f59e0b' },
    { name: 'Référencement Direct', value: 5, color: '#6366f1' }
  ];

  const insights = [
    {
      source: 'Réseaux Sociaux Organiques',
      percentage: '42%',
      detail: 'Instagram, TikTok, LinkedIn',
      quality: 'Haute intention d\'achat',
      color: 'blue'
    },
    {
      source: 'Publicités Payantes',
      percentage: '28%',
      detail: 'Meta Ads, LinkedIn Ads',
      quality: 'Conversion rapide',
      color: 'purple'
    },
    {
      source: 'SEO / Google',
      percentage: '15%',
      detail: 'Recherche organique',
      quality: 'Trafic qualifié long-terme',
      color: 'green'
    }
  ];

  const colorMap: Record<string, string> = {
    blue: 'from-blue-500 to-blue-600',
    purple: 'from-purple-500 to-purple-600',
    green: 'from-green-500 to-green-600'
  };

  return (
    <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-h-[85vh] overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <BarChart3 className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Sources de Trafic</h2>
            <p className="text-sm text-slate-600 mt-1">Répartition moyenne sur nos clients actifs</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <ResponsiveContainer width="100%" height={240}>
              <PieChart>
                <Pie
                  data={trafficData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${(percent * 100).toFixed(0)}%`}
                  outerRadius={90}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {trafficData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>

            <div className="mt-3 space-y-1.5">
              {trafficData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-xs text-slate-700">{item.name}</span>
                  <span className="ml-auto font-semibold text-slate-900 text-xs">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Analyse des Top Sources</h3>
            {insights.map((insight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`bg-gradient-to-br ${colorMap[insight.color]} p-4 rounded-xl text-white`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-bold text-sm">{insight.source}</h4>
                  <div className="text-xl font-bold">{insight.percentage}</div>
                </div>
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="opacity-90">📍</span>
                    <span>{insight.detail}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="opacity-90">✨</span>
                    <span>{insight.quality}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-5 border border-orange-200">
          <h3 className="text-lg font-bold text-slate-900 mb-2 flex items-center gap-2">
            <span className="text-2xl">🎯</span>
            Stratégie d'Acquisition Diversifiée
          </h3>
          <p className="text-slate-700 text-sm leading-relaxed">
            Nous ne misons <strong>jamais sur une seule source</strong>. Notre approche multi-canal garantit
            une acquisition stable et résiliente. L'objectif : construire
            un <strong>écosystème d'acquisition pérenne</strong> qui génère des leads 24/7.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
