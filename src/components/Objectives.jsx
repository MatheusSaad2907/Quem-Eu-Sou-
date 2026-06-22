import { motion } from 'framer-motion';
import {
    Heart,
    Search,
    Zap
} from 'lucide-react';


const objectives = [
    { icon: Heart, iconColor: 'text-red-500', title: 'Conhecer Jesus', description: 'Através da vida das pessoas da Bíblia, vemos o plano de redenção se desdobrar e conhecemos mais profundamente o caráter e o amor de Cristo.', delay: 0.1 },
    { icon: Search, iconColor: 'text-blue-500', title: 'Estudo Aprofundado', description: 'Mergulhamos nas Escrituras para entender o contexto, a história e as verdades eternas contidas em cada relato bíblico.', delay: 0.2 },
    { icon: Zap, iconColor: 'text-amber-500', title: 'Aplicação Prática', description: 'Buscamos aplicar os ensinamentos bíblicos em nossas vidas diárias, promovendo transformação e crescimento espiritual.', delay: 0.3 },
]

function Objectives() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 block"
                    >
                        Nossa Missão
                    </motion.span>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold tracking-tight"
                    >
                        Objetivos do Quem Eu Sou?
                    </motion.h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {objectives.map((objective) => {
                        const Icon = objective.icon  
                        return (
                            <motion.div
                                key={objective.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: objective.delay }}
                                className="bg-[#F5F5F7] p-10 rounded-[2.5rem] flex flex-col items-start text-left hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
                                    <Icon className={objective.iconColor} size={24} />
                                </div>
                                <h4 className = "text-2xl font-bold mb-4">{objective.title}</h4>
                                <p className = "text-gray-500 leading-relaxed">{objective.description}</p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>

        </section>
    )
}

export default Objectives;