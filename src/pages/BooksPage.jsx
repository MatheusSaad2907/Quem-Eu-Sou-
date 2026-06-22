import { Link } from 'react-router-dom'
import { ArrowLeft, Filter, SortAsc, LayoutGrid, Info, Play, Video, Trophy, Zap, ChevronRight, Users } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import bibleBooks from '../data/bibleBook.js'


function BooksPage() {
    const [selectedTestament, setSelectedTestament] = useState('Todos')
    const [subFilter, setSubFilter] = useState('Livros da Bíblia')
    const [orderFilter, setOrderFilter] = useState('Bíblia')


    const suffix = {
        'Todos': 'da Bíblia',
        'Antigo Testamento': 'do AT',
        'Novo Testamento': 'do NT'
    }[selectedTestament]

    const isLivros = subFilter.startsWith('Livros')
    const isInfo = subFilter.startsWith('Informações')

    const filteredBooks = bibleBooks
        .filter(book => selectedTestament === 'Todos' || book.testament === selectedTestament)
        .sort((a, b) => orderFilter === 'Alfabética' ? a.name.localeCompare(b.name) : 0)



    return (
        <div className="max-w-9xl mx-auto px-4 py-12">

            <Link to="/" className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-8 group w-fit">
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Voltar para o início
            </Link>

            <h1 className="text-5xl font-bold tracking-tight mb-4">Explorar por livro</h1>
            <p className="text-xl text-gray-500 mb-12">Mergulhe na biblioteca sagrada e descubra a riqueza de cada livro.</p>

            {/* Filtros principais */}
            <div className="flex justify-center gap-4 mb-8">
                {['Todos', 'Antigo Testamento', 'Novo Testamento'].map((t) => (
                    <button key={t} onClick={() => setSelectedTestament(t)}
                        className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${selectedTestament === t ? 'bg-black text-white shadow-lg' : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50'
                            }`}
                    >{t}</button>
                ))}
            </div>

            {/* Sub filtros */}
            <div className="flex justify-center gap-4 mb-8">
                {[`Informações ${suffix}`, `Livros ${suffix}`].map((s) => (
                    <button key={s} onClick={() => setSubFilter(s)}
                        className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${subFilter === s ? 'bg-gray-800 text-white shadow-md' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                            }`}
                    >{s}</button>
                ))}
            </div>



            {/* Ordenar por — só aparece em Livros */}
            {isLivros && (
                <div className="flex flex-col items-center gap-3 mb-12">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">Ordenar por</span>
                    <div className="flex gap-3">
                        {[
                            { label: 'Pela ordem da Bíblia', value: 'Bíblia', icon: <Filter size={14} /> },
                            { label: 'Pela ordem alfabética', value: 'Alfabética', icon: <SortAsc size={14} /> },
                            { label: 'Separado por seções', value: 'Seções', icon: <LayoutGrid size={14} /> },
                        ].map((o) => (
                            <button key={o.value} onClick={() => setOrderFilter(o.value)}
                                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all ${orderFilter === o.value ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300'
                                    }`}
                            >
                                {o.icon}{o.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}



            {isLivros && (
                orderFilter === 'Seções' ? (
                    // Agrupado por categoria
                    Array.from(new Set(filteredBooks.map(b => b.category))).map(category => (
                        <div key={category} className="mb-12">
                            <h3 className="text-2xl font-bold border-l-4 border-black pl-4 mb-6">{category}</h3>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {filteredBooks
                                    .filter(b => b.category === category)
                                    .map((book, index) => (
                                        <Link key={book.name} to={`/livros/${book.id}`}>
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.02, duration: 0.5 }}
                                                whileHover={{ y: -10, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                                                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md cursor-pointer"
                                            >
                                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">{book.category}</span>
                                                <h4 className="text-xl font-bold mb-1">{book.name}</h4>
                                                <p className="text-gray-400 text-[10px] font-medium">{book.testament}</p>
                                            </motion.div>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    ))
                ) : (
                    // Grid normal
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {filteredBooks.map((book, index) => (
                            <Link key={book.name} to={`/livros/${book.id}`}>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.02, duration: 0.5 }}
                                    whileHover={{ y: -10, transition: { type: "spring", stiffness: 400, damping: 25 } }}
                                    className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md cursor-pointer"
                                >
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">{book.category}</span>
                                    <h4 className="text-xl font-bold mb-1">{book.name}</h4>
                                    <p className="text-gray-400 text-[10px] font-medium">{book.testament}</p>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                )
            )}
            {/* Informações */}
            {isInfo && (
                <div className="space-y-16">

                    {/* Info Section */}
                    <div className="bg-gray-50 rounded-[3rem] p-12 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-6">
                            <Info className="text-black" size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Informações {suffix}</h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            {selectedTestament === 'Todos'
                                ? 'A Bíblia Sagrada é composta por 66 livros, divididos em Antigo Testamento (39 livros) e Novo Testamento (27 livros). Escrita por cerca de 40 autores ao longo de 1500 anos, ela é a revelação progressiva de Deus para a humanidade, centrada na pessoa de Jesus Cristo.'
                                : selectedTestament === 'Antigo Testamento'
                                    ? 'O Antigo Testamento contém 39 livros que narram a criação do mundo, a história do povo de Israel e as promessas de Deus que apontam para a vinda do Messias. É a base da nossa fé e revela a santidade e justiça de Deus.'
                                    : 'O Novo Testamento contém 27 livros que narram a vida, morte e ressurreição de Jesus Cristo, o nascimento da Igreja e as instruções para a vida cristã. É o cumprimento das promessas do Antigo Testamento.'
                            }
                        </p>
                    </div>

                    {/* Vídeos e Pregações */}
                    <section>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-600">
                                <Video size={24} />
                            </div>
                            <h2 className="text-3xl font-bold">Vídeos e Pregações</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="group cursor-pointer">
                                    <div className="aspect-video bg-gray-100 rounded-3xl mb-4 overflow-hidden relative">
                                        <img
                                            src={`https://picsum.photos/seed/video-general-${i}-${selectedTestament}/800/450`}
                                            alt="Video thumbnail"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            referrerPolicy="no-referrer"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform">
                                                <Play size={24} fill="black" />
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="font-bold text-lg mb-1 group-hover:text-red-600 transition-colors">
                                        {selectedTestament === 'Todos' ? 'Panorama Bíblico' : `Estudo: ${selectedTestament === 'Antigo Testamento' ? 'Antigo' : 'Novo'} Testamento`} - Aula {i}
                                    </h3>
                                    <p className="text-sm text-gray-500">Canal Teológico • 1.2M visualizações</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Quiz Section */}
                    <section className="bg-black text-white rounded-[3rem] p-12 overflow-hidden relative">
                        {/* Background Icon */}
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Trophy size={200} />
                        </div>

                        <div className="relative z-10 max-w-2xl text-left">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <Zap size={14} className="text-yellow-400" />
                                Desafio Bíblico
                            </div>

                            <h2 className="text-4xl font-bold mb-6">
                                Teste seus conhecimentos sobre {selectedTestament === 'Todos' ? 'a Bíblia' : `o ${selectedTestament === 'Antigo Testamento' ? 'Antigo' : 'Novo'} Testamento`}
                            </h2>

                            <p className="text-gray-400 text-lg mb-8">
                                Você está pronto para um desafio de nível mestre? Responda ao nosso quiz e prove que você conhece a Palavra!
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-all active:scale-95 flex items-center justify-center gap-3">
                                    Começar Quiz Solo
                                    <ChevronRight size={20} />
                                </button>

                                <a
                                    href="https://kahoot.it"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-10 py-4 bg-[#46178f] text-white rounded-full font-bold hover:bg-[#3c137b] transition-all active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-purple-900/40"
                                >
                                    Kahoot com Amigos
                                    <Users size={20} />
                                </a>
                            </div>
                        </div>
                    </section>






                </div>
            )}

        </div>
    )
}

export default BooksPage