import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';
import characters from '../data/Characters.js';
import { Link } from 'react-router-dom'

function CharacterCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // Memoiza os 5 personagens aleatórios
  const displayCharacters = useMemo(() => {
    const jesus = characters.find(c => c.id === 62)
    const others = [...characters]
      .filter(c => c.id !== 62)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
    return [jesus, ...others].filter(Boolean)
  }, [])

  const total = displayCharacters.length;

  // Handlers circulares limpos
  const next = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const interval = setInterval(next, 4000);
      return () => clearInterval(interval);
    }
  }, [loading, currentIndex]); // currentIndex aqui garante o reset do timer ao clicar manual

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <h3 className="text-3xl font-bold tracking-tight mb-4">Personagens em Destaque</h3>
        <p className="text-gray-500 max-w-xl">
          Conheça as figuras centrais que moldaram a história da fé e descubra o que suas vidas ensinam sobre nós.
        </p>
      </div>

      <div className="relative flex items-center justify-center h-[500px]">
        {/* Controles */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-20 z-30 pointer-events-none">
          <button onClick={prev} className="p-4 bg-white/90 rounded-full shadow-lg pointer-events-auto hover:scale-110 transition-transform">
            <ChevronLeft size={24} />
          </button>
          <button onClick={next} className="p-4 bg-white/90 rounded-full shadow-lg pointer-events-auto hover:scale-110 transition-transform">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Container de Cards */}
        <div className="relative w-full flex items-center justify-center">
          {displayCharacters.map((char, index) => {
            // Lógica de posição relativa ao currentIndex
            const offset = (index - currentIndex + total) % total;

            // Definimos quem é centro, esquerda e direita
            let position = "hidden";
            if (offset === 0) position = "center";
            if (offset === 1 || (offset === -4 && total === 5)) position = "right";
            if (offset === total - 1) position = "left";

            if (position === "hidden") return null;

            return (
              <motion.div
                key={char.id}
                initial={false}
                animate={{
                  x: position === "center" ? 0 : position === "left" ? -320 : 320,
                  scale: position === "center" ? 1 : 0.85,
                  opacity: position === "center" ? 1 : 0.4,
                  zIndex: position === "center" ? 20 : 10,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 26 }}
                className={`absolute w-72 md:w-85 h-[450px] rounded-3xl overflow-hidden shadow-2xl ${position !== "center" && 'grayscale'}`}
              >
                <img src={char.image} alt={char.name} className="w-full h-full object-cover" />

                {position === "center" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent flex flex-col justify-end p-8 text-white"
                  >
                    <h4 className="text-2xl font-bold">{char.name}</h4>
                    <p className="text-sm text-gray-300 line-clamp-2 mt-2">{char.description}</p>
                    <Link
                      to={`/personagens/${char.id}`}
                      className="mt-4 text-sm font-semibold flex items-center gap-1 hover:underline w-fit"
                    >
                      Ver história completa <ChevronRight size={14} />
                    </Link>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center gap-3 mt-12">
        {displayCharacters.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-1.5 transition-all duration-300 rounded-full ${currentIndex === i ? 'w-8 bg-black' : 'w-2 bg-gray-200'}`}
          />
        ))}
      </div>
    </section>


  );
}

export default CharacterCarousel;

