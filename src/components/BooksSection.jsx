import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, User, ChevronRight } from 'lucide-react'
import bibleBooks from '../data/bibleBook.js';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom'



function BooksSection() {
  const [selectedTestament, setSelectedTestament] = useState('Todos');
  // const [view, setView] = useState('home');


  // Embaralha UMA VEZ quando o componente monta
  const shuffledBooks = useMemo(() => {
    return [...bibleBooks].sort(() => Math.random() - 0.5)
  }, []) // ← [] significa "nunca recalcula"

  // Filtra sempre que o testamento mudar
  const filteredBooks = useMemo(() => {
    return shuffledBooks
      .filter(book => selectedTestament === 'Todos' || book.testament === selectedTestament)
      .slice(0, 8)
  }, [selectedTestament, shuffledBooks])

  const [subFilter, setSubFilter] = useState('Livros')



  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h3 className="text-3xl font-bold tracking-tight mb-4">Explorar por Livro</h3>
            <p className="text-gray-500 max-w-xl">
              Navegue pelas Escrituras e encontre os personagens que marcaram cada livro da Bíblia.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedTestament('Todos')}
              className={`px-4 py-2 text-xs font-bold rounded-full uppercase tracking-wider transition-all ${selectedTestament === 'Todos'
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800'
                }`}
            >Todos
            </button>
            <button
              onClick={() => setSelectedTestament('Antigo Testamento')}
              className={`px-4 py-2 text-xs font-bold rounded-full uppercase tracking-wider transition-all ${selectedTestament === 'Antigo Testamento'
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800'
                }`}
            >
              Antigo Testamento
            </button>
            <button
              onClick={() => setSelectedTestament('Novo Testamento')}
              className={`px-4 py-2 text-xs font-bold rounded-full uppercase tracking-wider transition-all ${selectedTestament === 'Novo Testamento'
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-zinc-800'
                }`}
            >
              Novo Testamento
            </button>
          </div>
        </div>



        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredBooks.map((book) => (
              <Link key={book.name} to={`/livros/${book.id}`}>
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all cursor-pointer overflow-hidden"
                >
                  <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                    <BookOpen size={64} />
                  </div>
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2 block">
                      {book.category}
                    </span>
                    <h4 className="text-xl font-bold mb-1 group-hover:text-black transition-colors">{book.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <User size={14} />
                      <span>{book.characterIds.length} Personagens</span>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </AnimatePresence>
        </div>
        <div className="flex justify-center mt-12">
          <Link
            to="/livros"
            className="flex items-center gap-2 px-8 py-4 bg-white border border-gray-200 text-black rounded-full text-sm font-bold hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
          >
            Ver todos os livros
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}


export default BooksSection;