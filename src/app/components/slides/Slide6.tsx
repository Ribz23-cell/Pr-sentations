import { Megaphone, Filter, Zap } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide6() {
  return (
    <div className="w-full max-w-6xl bg-gradient-to-br from-rose-600 to-pink-700 rounded-3xl shadow-2xl p-8 md:p-10 text-white max-h-[85vh] overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">OPTION #2</div>
          <Zap className="w-6 h-6 text-yellow-300" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-2">Combo Payant</h2>
        <p className="text-lg text-rose-200 mb-6">Accélération brutale de votre acquisition client</p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20"
          >
            <Megaphone className="w-8 h-8 text-yellow-300 mb-3" />
            <h3 className="text-xl font-bold mb-2">Publicités Ciblées</h3>
            <p className="text-rose-100 mb-3 text-sm leading-relaxed">
              Gestion complète de vos campagnes <strong>Meta Ads</strong> et <strong>LinkedIn Ads</strong>.
              Ciblage ultra-précis, tests A/B permanents.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">Audiences lookalike premium</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">Retargeting multi-plateformes</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">Reporting hebdomadaire détaillé</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">Créatives vidéo incluses</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20"
          >
            <Filter className="w-8 h-8 text-yellow-300 mb-3" />
            <h3 className="text-xl font-bold mb-2">Tunnels de Capture</h3>
            <p className="text-rose-100 mb-3 text-sm leading-relaxed">
              Construction de <strong>landing pages</strong> et <strong>formulaires optimisés</strong> pour la conversion.
              Intégration CRM, lead magnets.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">Pages de vente haute conversion</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">Lead magnets irrésistibles</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">Automatisation email (7 jours)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">Tracking pixel & analytics</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-5 shadow-xl mb-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-2xl font-bold mb-1">À partir de 1 290€/mois</div>
              <div className="text-yellow-100 text-sm">Gestion ads + Budget publicitaire client en sus • Contrat 6 mois</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-lg text-center">
              <div className="text-xs font-semibold">ROAS Moyen</div>
              <div className="text-2xl font-bold">5.2x</div>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
          <p className="text-xs text-rose-100">
            💡 <strong>Recommandation :</strong> Budget publicitaire minimum conseillé : 500€/mois pour des résultats optimaux
          </p>
        </div>
      </motion.div>
    </div>
  );
}
