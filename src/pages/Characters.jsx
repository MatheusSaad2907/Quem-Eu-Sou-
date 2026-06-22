// src/pages/CharactersPage.jsx
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Search, SortAsc, Filter, User } from 'lucide-react'
import { motion } from 'framer-motion'
import characters from '../data/Characters.js'

export default function CharactersPage() {
    const [searchTerm, setSearchTerm] = useState('')
    const [orderFilter, setOrderFilter] = useState('Padrão')

    const filtered = characters
        .filter(c =>
            c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            c.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort((a, b) => orderFilter === 'Alfabética' ? a.name.localeCompare(b.name) : 0)

    return (
        <div className="pt-28 pb-24 px-4 max-w-7xl mx-auto">

            {/* Cabeçalho */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                <div>
                    <h2 className="text-3xl font-bold mb-2">Todos os Personagens</h2>
                    <p className="text-gray-500">Descubra as figuras marcantes da Bíblia.</p>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="relative w-full sm:w-64">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Buscar personagem..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-black/5 transition-all"
                        />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mr-2">Ordenar por</div>
                        {['Padrão', 'Alfabética'].map((o) => (
                            <button
                                key={o}
                                onClick={() => setOrderFilter(o)}
                                className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all ${
                                    orderFilter === o
                                        ? 'bg-blue-50 text-blue-600 border border-blue-200'
                                        : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300'
                                }`}
                            >
                                {o === 'Alfabética' ? <SortAsc size={14} /> : <Filter size={14} />}
                                {o}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {filtered.length > 0 ? (
                    filtered.map((char) => (
                        <motion.div
                            key={char.id}
                            whileHover={{ y: -10 }}
                            className="group bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            <div className="aspect-[4/5] bg-gray-100 relative overflow-hidden">
                                <img
                                    src={char.image}
                                    alt={char.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                                    <Link
                                        to={`/personagens/${char.id}`}
                                        className="w-full py-4 bg-white text-black rounded-2xl font-bold text-sm shadow-xl text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                                    >
                                        Ver Perfil Completo
                                    </Link>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold mb-2">{char.name}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                    {char.description}
                                </p>
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center bg-gray-50 rounded-[3rem]">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-3xl shadow-sm mb-6">
                            <User className="text-gray-300" size={40} />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Nenhum personagem encontrado</h3>
                        <p className="text-gray-500">Tente buscar por outro nome.</p>
                    </div>
                )}
            </div>
        </div>
    )
}