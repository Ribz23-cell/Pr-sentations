import { Search, Settings, Rocket, LineChart as LineChartIcon } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide11() {
  const timeline = [
    {
      phase: 'Phase 1',
      title: 'Audit & Stratégie',
      duration: 'Semaine 1',
      icon: Search,
      color: 'blue',
      tasks: [
        'Analyse marché et concurrence',
        'Audit assets digitaux',
        'Définition personas cibles',
        'Stratégie de contenu'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Configuration',
      duration: 'Semaine 2-3',
      icon: Settings,
      color: 'purple',
      tasks: [
        'Optimisation profils sociaux',
        'Tracking et analytics',
        'Templates de contenu',
        'Automatisations et CRM'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Lancement',
      duration: 'Semaine 4-8',
      icon: Rocket,
      color: 'green',
      tasks: [
        'Lancement campagnes de contenu',
        'Activation publicités',
        'Engagement communautaire',
        'Tests A/B et ajustements'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Scale & Optimisation',
      duration: 'Mois 3+',
      icon: LineChartIcon,
      color: 'orange',
      tasks: [
        'Analyse des performances',
        'Scaling des formats performants',
        'Optimisation funnel conversion',
        'Reporting et ajustements'
      ]
    }
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: 'from-blue-500 to-blue-600', border: 'border-blue-300', text: 'text-blue-600' },
    purple: { bg: 'from-purple-500 to-purple-600', border: 'border-purple-300', text: 'text-purple-600' },
    green: { bg: 'from-green-500 to-green-600', border: 'border-green-300', text: 'text-green-600' },
    orange: { bg: 'from-orange-500 to-orange-600', border: 'border-orange-300', text: 'text-orange-600' }
  };

  return (
    <div className="w-full max-w-6xl bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-8 md:p-10 text-white max-h-[85vh] overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-2">Processus de Démarrage</h2>
        <p className="text-base text-slate-300 mb-6">De zéro à la génération de leads en 60 jours</p>

        <div className="space-y-4">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            const colors = colorMap[item.color];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`bg-gradient-to-br ${colors.bg} w-12 h-12 rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gradient-to-b from-slate-600 to-slate-700 mt-2"></div>
                    )}
                  </div>

                  <div className="flex-1 pb-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <div className="text-xs text-slate-400 mb-0.5">{item.phase}</div>
                          <h3 className="text-lg font-bold">{item.title}</h3>
                        </div>
                        <div className="bg-white/10 px-3 py-1 rounded-lg">
                          <div className="text-xs font-semibold">{item.duration}</div>
                        </div>
                      </div>
                      <ul className="space-y-1.5">
                        {item.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start gap-2 text-slate-300">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-xs">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-6 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-5 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="text-3xl">⚡</div>
            <div>
              <h3 className="text-lg font-bold mb-1">Engagement Complet</h3>
              <p className="text-green-100 text-sm">
                <strong>Dashboard temps réel</strong>, point hebdomadaire avec votre account manager,
                et support réactif via WhatsApp Business.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
