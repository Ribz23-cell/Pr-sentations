import { Video, Linkedin, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide5() {
  return (
    <div className="w-full max-w-6xl bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl shadow-2xl p-8 md:p-10 text-white max-h-[85vh] overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">OPTION #1</div>
          <Sparkles className="w-6 h-6 text-yellow-300" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-2">Combo Organique</h2>
        <p className="text-lg text-indigo-200 mb-6">Dominez les algorithmes sans budget publicitaire</p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20"
          >
            <Video className="w-8 h-8 text-yellow-300 mb-3" />
            <h3 className="text-xl font-bold mb-2">Vidéos Courtes Virales</h3>
            <p className="text-indigo-100 mb-3 text-sm leading-relaxed">
              Production de <strong>Reels Instagram</strong> et <strong>TikToks</strong> optimisés pour l'algorithme.
              Scripts orientés conversion, montage pro.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">15-20 vidéos/mois</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">Tendances tracking quotidien</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">CTA dans bio optimisé</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20"
          >
            <Linkedin className="w-8 h-8 text-yellow-300 mb-3" />
            <h3 className="text-xl font-bold mb-2">LinkedIn Ghostwriting</h3>
            <p className="text-indigo-100 mb-3 text-sm leading-relaxed">
              Écriture de posts <strong>thought leadership</strong> pour positionner votre marque en expert.
              Génère des demandes de devis inbound.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">12-15 posts stratégiques/mois</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">Engagement actif avec prospects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-300 rounded-full"></div>
                <span className="text-xs">Storytelling orienté B2B</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-5 shadow-xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-2xl font-bold mb-1">À partir de 590€/mois</div>
              <div className="text-yellow-100 text-sm">Contrat 3 mois • 100% organique • Résultats sous 45 jours</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-5 py-2 rounded-lg text-center">
              <div className="text-xs font-semibold">ROI Moyen</div>
              <div className="text-2xl font-bold">320%</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
