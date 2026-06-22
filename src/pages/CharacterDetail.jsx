import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, BookOpen, Zap, LayoutGrid, Video, Lightbulb, ChevronLeft, ChevronRight, Play, ExternalLink, Info, User, Calendar } from 'lucide-react'
import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import characters from '../data/Characters.js'

function PassageItem({ verse, idx, pressingIdx, onPressStart, onPressEnd }) {
    return (
        <motion.div
            onMouseDown={() => onPressStart(idx, verse.url)}
            onMouseUp={onPressEnd}
            onMouseLeave={onPressEnd}
            onTouchStart={() => onPressStart(idx, verse.url)}
            onTouchEnd={onPressEnd}
            animate={pressingIdx === idx ? {
                scale: 0.96,
                backgroundColor: '#f0fdf4',
                boxShadow: '0 0 25px rgba(16, 185, 129, 0.2)',
                x: [0, -1, 1, -1, 1, 0],
            } : {
                scale: 1,
                backgroundColor: '#ffffff',
                boxShadow: '0 0 0px rgba(16, 185, 129, 0)',
                x: 0
            }}
            transition={pressingIdx === idx ? {
                x: { repeat: Infinity, duration: 0.1 },
                scale: { duration: 0.2 },
                backgroundColor: { duration: 0.2 }
            } : { duration: 0.2 }}
            className="relative flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl hover:border-black/10 transition-all group cursor-pointer select-none overflow-hidden"
        >
            {pressingIdx === idx && (
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, ease: "linear" }}
                    className="absolute bottom-0 left-0 h-1 bg-emerald-500"
                />
            )}
            <span className="font-bold text-gray-900 relative z-10">{verse.reference}</span>
            <ExternalLink size={16} className="text-gray-300 group-hover:text-black transition-colors relative z-10" />
        </motion.div>
    )
}

function TimelineItem({ event, idx, pressingIdx, onPressStart, onPressEnd }) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="relative"
        >
            <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-white border-4 border-black z-10" />
            <motion.div
                onMouseDown={() => event.url && onPressStart(`timeline-${idx}`, event.url)}
                onMouseUp={onPressEnd}
                onMouseLeave={onPressEnd}
                onTouchStart={() => event.url && onPressStart(`timeline-${idx}`, event.url)}
                onTouchEnd={onPressEnd}
                animate={pressingIdx === `timeline-${idx}` ? {
                    scale: 0.98,
                    backgroundColor: '#fffbeb',
                    boxShadow: '0 0 25px rgba(245, 158, 11, 0.2)',
                } : {
                    scale: 1,
                    backgroundColor: '#ffffff',
                    boxShadow: '0 0 0px rgba(245, 158, 11, 0)',
                }}
                transition={{ duration: 0.2 }}
                className="relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all cursor-pointer select-none overflow-hidden"
            >
                {pressingIdx === `timeline-${idx}` && event.url && (
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, ease: "linear" }}
                        className="absolute bottom-0 left-0 h-1 bg-amber-500"
                    />
                )}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="font-bold text-black relative z-10">{event.label}</h4>
                    {event.verse && (
                        <span className="text-[10px] font-bold text-amber-600 bg-amber-50 px-2 py-1 rounded-full flex items-center gap-1 w-fit relative z-10">
                            <BookOpen size={10} />
                            {event.verse}
                            <ExternalLink size={8} />
                        </span>
                    )}
                </div>
                <p className="text-sm text-gray-500 relative z-10">{event.description}</p>
            </motion.div>
        </motion.div>
    )
}

function CharacterDetail() {
    const { id } = useParams()
    const char = characters.find(c => c.id === Number(id))
    const [storyIndex, setStoryIndex] = useState(0)
    const [pressingIdx, setPressingIdx] = useState(null)
    const pressTimers = useRef({})

    if (!char) return <div className="text-center py-32">Personagem não encontrado</div>

    // ✅ Corrigido: usa char.lessons (array de objetos com title e description)
    const lesson = Array.isArray(char.lessons) && char.lessons.length > 0
        ? char.lessons.map(l => ({ title: l.title, content: l.description }))
        : []

    function handlePressStart(idx, url) {
        setPressingIdx(idx)
        pressTimers.current[idx] = setTimeout(() => {
            window.open(url, '_blank')
            setPressingIdx(null)
        }, 1000)
    }

    function handlePressEnd() {
        Object.values(pressTimers.current).forEach(t => clearTimeout(t))
        pressTimers.current = {}
        setPressingIdx(null)
    }

    return (
        <div className="pt-12 pb-24 px-4 max-w-7xl mx-auto">

            <Link
                to="/livros"
                className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 group w-fit"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Voltar para livros
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Coluna Esquerda */}
                <div className="lg:col-span-4 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="aspect-[3/4] bg-gray-100 rounded-[3rem] overflow-hidden shadow-2xl relative group"
                    >
                        <img
                            src={char.image}
                            alt={char.name}
                            className="w-full h-full object-cover mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-700"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
                            <h1 className="text-4xl font-bold">{char.name}</h1>
                        </div>
                    </motion.div>

                    {/* Ficha Técnica */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6"
                    >
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest border-b border-gray-50 pb-4">Ficha Técnica</h3>
                        <div className="space-y-4">
                            {char.meaning && (
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 flex-shrink-0">
                                        <Info size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Significado do Nome</div>
                                        <div className="font-bold text-gray-900">{char.meaning}</div>
                                    </div>
                                </div>
                            )}
                            {char.function && (
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <User size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Função Principal</div>
                                        <div className="font-bold text-gray-900">{char.function}</div>
                                    </div>
                                </div>
                            )}
                            {char.period && (
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Período</div>
                                        <div className="font-bold text-gray-900">{char.period}</div>
                                    </div>
                                </div>
                            )}
                            {!char.meaning && !char.function && !char.period && (
                                <p className="text-gray-400 text-sm">Informações em breve...</p>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Coluna Direita */}
                <div className="lg:col-span-8 space-y-12">

                    {/* Quem Foi */}
                    <motion.section
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-gray-50 p-10 rounded-[3rem]"
                    >
                        <h2 className="text-2xl font-bold mb-4">Quem Foi?</h2>
                        <p className="text-xl text-gray-600 leading-relaxed italic">{char.description}</p>
                    </motion.section>

                    {/* ✅ Corrigido: char.verses em vez de char.stories */}
                    {char.verses && char.verses.filter(v => v.url).length > 0 ? (
                        <section className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                    <BookOpen size={24} />
                                </div>
                                <h2 className="text-2xl font-bold">Passagens-Chave</h2>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {char.verses.filter(v => v.url).map((verse, idx) => (
                                    <PassageItem
                                        key={idx}
                                        verse={verse}
                                        idx={idx}
                                        pressingIdx={pressingIdx}
                                        onPressStart={handlePressStart}
                                        onPressEnd={handlePressEnd}
                                    />
                                ))}
                            </div>
                        </section>
                    ) : (
                        <section className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                    <BookOpen size={24} />
                                </div>
                                <h2 className="text-2xl font-bold">Passagens-Chave</h2>
                            </div>
                            <div className="py-10 text-center bg-gray-50 rounded-[2rem]">
                                <p className="text-gray-400 text-sm">Passagens-chave em breve...</p>
                            </div>
                        </section>
                    )}

                    {/* Estudos e Reflexões */}
                    {lesson.length > 0 && (
                        <section className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                                        <Zap size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold">Estudos e Reflexões</h2>
                                </div>
                                {lesson.length > 1 && (
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => setStoryIndex(prev => prev === 0 ? lesson.length - 1 : prev - 1)}
                                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <button
                                            onClick={() => setStoryIndex(prev => prev === lesson.length - 1 ? 0 : prev + 1)}
                                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                )}
                            </div>
                            <div className="relative overflow-hidden bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm min-h-[300px] flex flex-col">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={storyIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4"
                                    >
                                        <h3 className="text-xl font-bold text-indigo-600">{lesson[storyIndex]?.title}</h3>
                                        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">{lesson[storyIndex]?.content}</p>
                                    </motion.div>
                                </AnimatePresence>
                                {lesson.length > 1 && (
                                    <div className="mt-8 flex gap-2 justify-center">
                                        {lesson.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setStoryIndex(idx)}
                                                className={`h-1.5 rounded-full transition-all ${idx === storyIndex ? 'w-8 bg-indigo-600' : 'w-2 bg-gray-200 hover:bg-gray-300'}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>
                    )}

                    {/* Linha do Tempo */}
                    {char.timeline && char.timeline.length > 0 && (
                        <section className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                                    <LayoutGrid size={24} />
                                </div>
                                <h2 className="text-2xl font-bold">Linha do Tempo</h2>
                            </div>
                            <div className="relative pl-8 space-y-12 before:absolute before:left-[15px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
                                {char.timeline.map((event, idx) => (
                                    <TimelineItem
                                        key={idx}
                                        event={event}
                                        idx={idx}
                                        pressingIdx={pressingIdx}
                                        onPressStart={handlePressStart}
                                        onPressEnd={handlePressEnd}
                                    />
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>

            {/* Seções Full Width */}
            <div className="mt-20 space-y-20">

                {/* Mídia Recomendada */}
                <section>
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                            <Video size={24} />
                        </div>
                        <h2 className="text-3xl font-bold">Vídeos e Pregações</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {char.videos && char.videos.length > 0 ? (
                            char.videos.map((video, idx) => (
                                <div key={idx} className="group">
                                    <div className="aspect-video rounded-3xl mb-4 overflow-hidden">
                                        <iframe
                                            src={video.url}
                                            title={video.title}
                                            className="w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen
                                        />
                                    </div>
                                    <h3 className="font-bold text-lg mb-1">{video.title}</h3>
                                    <p className="text-sm text-gray-500">{video.channel}</p>
                                </div>
                            ))
                        ) : (
                            <div className="col-span-3 text-center py-12 text-gray-400">
                                Vídeos em breve...
                            </div>
                        )}
                    </div>
                </section>

                {/* ✅ Corrigido: char.lessons é array, não precisa checar .length em objeto */}
                {Array.isArray(char.lessons) && char.lessons.length > 0 && (
                    <section className="space-y-8">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                                <Lightbulb size={24} />
                            </div>
                            <h2 className="text-2xl font-bold">Lições de Vida</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {char.lessons.map((lesson, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -5 }}
                                    className="bg-amber-50/50 p-8 rounded-[2rem] border border-amber-100/50 flex gap-4 items-start shadow-sm hover:shadow-md transition-all"
                                >
                                    <div className="w-8 h-8 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 flex-shrink-0 mt-0.5 font-bold">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-amber-900 mb-2">{lesson.title}</h4>
                                        <p className="text-amber-800 font-medium leading-relaxed text-sm">{lesson.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    )
}

export default CharacterDetail