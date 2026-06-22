import { useParams, Link } from 'react-router-dom'
import {
    ArrowLeft, PenTool, Calendar, Book, Zap, LayoutGrid, Star, Quote,
    Heart, Target, Lightbulb, Video, Play, Trophy, ChevronRight, Users, RotateCcw
} from 'lucide-react'
import { useState } from 'react'
import bibleBooks from '../data/bibleBook.js'
import characters from '../data/Characters.js'
import useLongPress from '../hooks/useLongPress.js'
import { motion } from 'framer-motion'
import { Search, Filter, SortAsc, User } from 'lucide-react'

function BookDetail() {
    const { id } = useParams()
    const book = bibleBooks.find(b => b.id === Number(id))
    const [activeTab, setActiveTab] = useState('info')
    const [searchTerm, setSearchTerm] = useState('');
    // const characters = bibleCharacters.filter(c => book.characterIds.includes(c.id))
    const [orderFilter, setOrderFilter] = useState('Padrão')


    const [quizState, setQuizState] = useState({
        currentQuestion: 0,
        score: 0,
        showResult: false,
        selectedAnswer: null
    })

    const resetQuiz = () => {
        setQuizState({ currentQuestion: 0, score: 0, showResult: false, selectedAnswer: null })
    }

    if (!book) return <div className="text-center py-32">Livro não encontrado</div>


    return (
        <div className="max-w-7xl mx-auto px-4 py-12">

            {/* Voltar */}
            <Link
                to="/livros"
                className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors mb-12 group w-fit"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Voltar para livros
            </Link>

            {/* Título */}
            <div className="text-center mb-16">
                <h1 className="text-6xl font-bold tracking-tight mb-12">{book.name}</h1>

                <div className="flex justify-center gap-4 flex-wrap">
                    {[
                        { key: 'info', label: 'Informações' },
                        { key: 'characters', label: 'Personagens' },
                        { key: 'quiz', label: 'Desafio Bíblico' },
                    ].map((tab) => (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activeTab === tab.key
                                ? 'bg-black text-white shadow-lg scale-105'
                                : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* ABA INFORMAÇÕES */}
            {activeTab === 'info' && (
                <div className="space-y-16">

                    {/* Ficha Técnica */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                                <PenTool size={24} />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Autor</span>
                            <h3 className="text-lg font-bold">{book.author || 'Tradição'}</h3>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                                <Calendar size={24} />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Data</span>
                            <h3 className="text-lg font-bold">{book.writtenDate || 'Desconhecida'}</h3>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center text-center">
                            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                                <Book size={24} />
                            </div>
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Gênero</span>
                            <h3 className="text-lg font-bold">{book.category}</h3>
                        </div>
                    </div>

                    {/* Propósito */}
                    <div className="bg-gray-50 rounded-[3rem] p-12 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl shadow-sm mb-6">
                            <Zap className="text-yellow-500" size={32} />
                        </div>
                        <h2 className="text-3xl font-bold mb-6">Propósito do Livro</h2>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto italic">
                            "{book.purpose || `Explorar a mensagem e o contexto de ${book.name} dentro do plano de Deus.`}"
                        </p>
                    </div>

                    {/* Estrutura do livro */}
                    {book.outline && book.outline.length > 0 && (
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                    <LayoutGrid size={24} />
                                </div>
                                <h2 className="text-3xl font-bold">Estrutura do Livro</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {book.outline.map((item, idx) => (
                                    <OutlineItem key={idx} item={item} book={book} />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Versículos de Ouro */}
                    {/* {book.keyVerses && book.keyVerses.length > 0 && (
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center text-yellow-600">
                                    <Star size={24} />
                                </div>
                                <h2 className="text-3xl font-bold">Versículos de Ouro</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {book.keyVerses.map((verse, idx) => (
                                    <div
                                        key={idx}
                                        className="relative aspect-square bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[2.5rem] p-8 flex flex-col justify-between text-white shadow-xl overflow-hidden"
                                    >
                                        <Quote className="opacity-20 mb-4" size={40} />
                                        <p className="text-lg font-medium leading-relaxed relative z-10">
                                            "{verse.text}"
                                        </p>
                                        <span className="font-bold text-sm opacity-90 relative z-10">{verse.reference}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )} */}

                    {/* Onde está Cristo */}
                    {book.christInBook && (
                        <div className="bg-indigo-50 rounded-[3rem] p-12 border border-indigo-100">
                            <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
                                <div className="w-20 h-20 bg-white rounded-3xl shadow-sm flex items-center justify-center text-indigo-600 mb-8">
                                    <Heart size={40} fill="currentColor" />
                                </div>
                                <h2 className="text-3xl font-bold text-indigo-900 mb-6">Onde está Cristo neste Livro?</h2>
                                <p className="text-xl text-indigo-800/80 leading-relaxed font-medium">
                                    {book.christInBook}
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Aplicação Prática & Curiosidades */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {book.practicalApplication && book.practicalApplication.length > 0 && (
                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                                        <Target size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold">Aplicação Prática</h2>
                                </div>
                                <ul className="space-y-6">
                                    {book.practicalApplication.map((point, idx) => (
                                        <li key={idx} className="flex gap-4">
                                            <div className="mt-1.5 w-5 h-5 rounded-full bg-emerald-100 flex-shrink-0 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-emerald-600" />
                                            </div>
                                            <p className="text-gray-700 font-medium leading-relaxed">{point}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {book.trivia && book.trivia.length > 0 && (
                            <div className="bg-white p-10 rounded-[3rem] border border-gray-100 shadow-sm">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600">
                                        <Lightbulb size={24} />
                                    </div>
                                    <h2 className="text-2xl font-bold">Curiosidades</h2>
                                </div>
                                <div className="space-y-4">
                                    {book.trivia.map((fact, idx) => (
                                        <div key={idx} className="bg-amber-50/50 p-6 rounded-2xl border border-amber-100/50 text-amber-900 font-medium leading-relaxed">
                                            {fact}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
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
                            {book.videos && book.videos.length > 0 ? (
                                book.videos.map((video, idx) => (
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

                    {/* Quiz CTA */}
                    <section className="bg-black text-white rounded-[3rem] p-12 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-12 opacity-10">
                            <Trophy size={200} />
                        </div>
                        <div className="relative z-10 max-w-2xl">
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                                <Zap size={14} className="text-yellow-400" />
                                Desafio Bíblico
                            </div>
                            <h2 className="text-4xl font-bold mb-6">Teste seus conhecimentos sobre {book.name}</h2>
                            <p className="text-gray-400 text-lg mb-8">
                                Você realmente conhece a história e os ensinamentos deste livro? Responda ao nosso quiz e descubra!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setActiveTab('quiz')}
                                    className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-all active:scale-95 flex items-center justify-center gap-3"
                                >
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

            {/* ABA PERSONAGENS */}
            {activeTab === 'characters' && (
                <div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">Personagens de {book.name}</h2>
                            <p className="text-gray-500">Descubra as figuras marcantes deste livro.</p>
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
                                        onClick={() => setOrderFilter(o === 'Padrão' ? 'Padrão' : 'Alfabética')}
                                        className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all ${orderFilter === o
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

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {characters
                            .filter(c => book.characterIds.includes(c.id))
                            .filter(c =>
                                c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                c.description.toLowerCase().includes(searchTerm.toLowerCase())
                            )
                            .sort((a, b) => orderFilter === 'Alfabética' ? a.name.localeCompare(b.name) : 0)
                            .map((char) => (
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
                            ))}

                        {characters
                            .filter(c => book.characterIds.includes(c.id))
                            .filter(c =>
                                c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                c.description.toLowerCase().includes(searchTerm.toLowerCase())
                            ).length === 0 && (
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
            )}

            {/* ABA QUIZ */}
            {activeTab === 'quiz' && (
                <div className="max-w-3xl mx-auto">
                    {!book.quiz || book.quiz.length === 0 ? (
                        <div className="bg-white p-16 rounded-[3rem] border border-gray-100 shadow-sm text-center">
                            <h2 className="text-3xl font-bold mb-4">Desafio em breve!</h2>
                            <p className="text-gray-500 text-lg">Estamos preparando perguntas incríveis sobre {book.name}.</p>
                        </div>
                    ) : quizState.showResult ? (
                        <div className="bg-white p-16 rounded-[3rem] border border-gray-100 shadow-xl text-center space-y-8">
                            <div className="w-24 h-24 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-500 mx-auto mb-4">
                                <Trophy size={48} />
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold mb-2">Resultado Final</h2>
                                <div className="text-6xl font-black text-black">{quizState.score} / {book.quiz.length}</div>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                                <button
                                    onClick={resetQuiz}
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-all shadow-lg"
                                >
                                    <RotateCcw size={20} />
                                    Tentar Novamente
                                </button>
                                <button
                                    onClick={() => setActiveTab('info')}
                                    className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all"
                                >
                                    Voltar às Informações
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-8">
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center font-bold">
                                        {quizState.currentQuestion + 1}
                                    </div>
                                    <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">Questão</div>
                                </div>
                                <div className="text-sm font-bold text-gray-400">{book.quiz.length} Questões</div>
                            </div>

                            <div className="bg-white p-12 rounded-[3rem] border border-gray-100 shadow-sm space-y-10">
                                <h2 className="text-3xl font-bold leading-tight">
                                    {book.quiz[quizState.currentQuestion].question}
                                </h2>

                                <div className="grid grid-cols-1 gap-4">
                                    {book.quiz[quizState.currentQuestion].options.map((option, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setQuizState(prev => ({ ...prev, selectedAnswer: idx }))}
                                            className={`p-6 rounded-2xl border-2 text-left transition-all flex items-center justify-between ${quizState.selectedAnswer === idx
                                                ? 'border-black bg-black text-white'
                                                : 'border-gray-100 hover:border-gray-300 bg-white'
                                                }`}
                                        >
                                            <span className="font-bold text-lg">{option}</span>
                                        </button>
                                    ))}
                                </div>

                                <button
                                    disabled={quizState.selectedAnswer === null}
                                    onClick={() => {
                                        const isCorrect = quizState.selectedAnswer === book.quiz[quizState.currentQuestion].correctAnswer
                                        const isLastQuestion = quizState.currentQuestion === book.quiz.length - 1

                                        if (isLastQuestion) {
                                            setQuizState(prev => ({
                                                ...prev,
                                                score: prev.score + (isCorrect ? 1 : 0),
                                                showResult: true
                                            }))
                                        } else {
                                            setQuizState(prev => ({
                                                ...prev,
                                                currentQuestion: prev.currentQuestion + 1,
                                                score: prev.score + (isCorrect ? 1 : 0),
                                                selectedAnswer: null
                                            }))
                                        }
                                    }}
                                    className={`w-full py-6 rounded-full font-bold text-xl transition-all shadow-lg flex items-center justify-center gap-3 ${quizState.selectedAnswer === null
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-black text-white hover:scale-[1.02]'
                                        }`}
                                >
                                    {quizState.currentQuestion === book.quiz.length - 1 ? 'Finalizar Desafio' : 'Próxima Questão'}
                                    <ChevronRight size={24} />
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

        </div>
    )
}

// Cria esse componente FORA do BookDetail
function OutlineItem({ item, book }) {
    const { handlePressStart, handlePressEnd, isPressing, progress } = useLongPress(
        () => window.open(book.getBibleUrl(item.beginChapter), '_blank')
    )

    return (
        <div
            onMouseDown={handlePressStart}
            onMouseUp={handlePressEnd}
            onTouchStart={handlePressStart}
            onTouchEnd={handlePressEnd}
            className={`relative overflow-hidden bg-white p-6 rounded-3xl border-2 flex items-start gap-6 cursor-pointer select-none transition-all duration-150 ${isPressing ? 'border-emerald-500' : 'border-gray-100'
                }`}
        >
            <div
                className="absolute inset-0 bg-emerald-50 transition-none"
                style={{ width: `${progress}%` }}
            />
            <div className="relative z-10 bg-gray-50 px-4 py-2 rounded-2xl text-sm font-bold text-gray-400 whitespace-nowrap">
                Cap. {item.beginChapter}-{item.endChapter}
            </div>
            <p className="relative z-10 text-gray-700 font-medium leading-tight pt-2">
                {item.description}
            </p>
        </div>
    )
}

export default BookDetail