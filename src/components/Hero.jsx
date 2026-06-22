import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react'
import videoQuem from '../videos/QuemEu.mp4'; 



function Hero() {
    return (
        <section className="relative py-20 flex flex-col items-center justify-start px-4 overflow-hidden border-b border-gray-50">
            <div className="relative z-10 text-center max-w-4xl mx-auto flex flex-col items-center">
                {/* Logo Title Video */}
                <div className="w-full max-w-3xl aspect-video mb-8 ">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-contain"
                    >
                        <source src={videoQuem} type="video/mp4" />
                    </video>
                </div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl"
                >
                    Descubra a sua identidade na Palavra.
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-lg text-gray-500 mb-10 leading-relaxed max-w-2xl"
                >
                    "Quem Eu Sou?" é uma jornada de autodescoberta e aprendizado bíblico.
                    Assim como Deus se revelou a Moisés como o grande "EU SOU", convidamos você a descobrir que Jesus é a resposta definitiva para a sua busca por identidade.
                    Exploramos as vidas daqueles que vieram antes de nós para entender nosso propósito nAquele que é o autor da vida.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="px-8 py-4 bg-black text-white rounded-full text-base font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-lg active:scale-95">
                        Começar Jornada
                    </button>
                    <button className="px-8 py-4 bg-white border border-gray-200 text-black rounded-full text-base font-semibold hover:bg-gray-50 transition-all flex items-center justify-center gap-2 active:scale-95">
                        <BookOpen size={20} />
                        Ver Histórias
                    </button>
                </motion.div>
            </div>
        </section>

    )
}

export default Hero;