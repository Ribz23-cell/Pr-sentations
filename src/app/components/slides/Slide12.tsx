import { Mail, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Slide12() {
  return (
    <div className="w-full max-w-6xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white max-h-[85vh] overflow-y-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-6"
        >
          <Sparkles className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Prêt à transformer votre présence digitale ?</h2>
          <p className="text-lg md:text-xl text-blue-100 font-light">
            Parlons de vos objectifs et construisons ensemble votre stratégie de croissance
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="grid md:grid-cols-3 gap-4 my-8"
        >
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <Mail className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
            <h3 className="text-base font-bold mb-2">Email</h3>
            <a
              href="mailto:contact@votreagence.mg"
              className="text-blue-100 hover:text-white transition-colors text-sm break-all"
            >
              contact@votreagence.mg
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <MessageCircle className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
            <h3 className="text-base font-bold mb-2">WhatsApp Business</h3>
            <a
              href="https://wa.me/261341234567"
              className="text-blue-100 hover:text-white transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              +261 34 12 345 67
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/20 hover:bg-white/20 transition-all">
            <ExternalLink className="w-8 h-8 mx-auto mb-3 text-yellow-300" />
            <h3 className="text-base font-bold mb-2">Portfolio</h3>
            <a
              href="https://votreportfolio.com"
              className="text-blue-100 hover:text-white transition-colors text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              votreportfolio.com
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl p-6 shadow-2xl"
        >
          <h3 className="text-2xl font-bold mb-3">🎁 Offre de Lancement</h3>
          <p className="text-base mb-4">
            Les <strong>5 premiers clients</strong> bénéficient d'un <strong>audit stratégique gratuit</strong> (valeur 350€)
            + <strong>1 mois de gestion offert</strong> sur un contrat annuel
          </p>
          <div className="inline-block bg-white/20 backdrop-blur-sm px-5 py-2 rounded-lg">
            <div className="text-xs font-semibold">Offre valable jusqu'au</div>
            <div className="text-xl font-bold">31 Juin 2026</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8"
        >
          <p className="text-sm text-blue-100 mb-3">Réponse garantie sous 24h • Premier rendez-vous gratuit • Sans engagement</p>
          <div className="flex justify-center gap-3 flex-wrap">
            <div className="bg-white/10 px-3 py-1 rounded-lg text-xs">🇫🇷 Français</div>
            <div className="bg-white/10 px-3 py-1 rounded-lg text-xs">🇬🇧 English</div>
            <div className="bg-white/10 px-3 py-1 rounded-lg text-xs">⏰ GMT+3</div>
          </div>
        </motion.div>

        <div className="mt-6 pt-6 border-t border-white/20">
          <p className="text-xs text-blue-200">
            © 2026 Votre Agence Community Management • Madagascar • Tous droits réservés
          </p>
        </div>
      </motion.div>
    </div>
  );
}
