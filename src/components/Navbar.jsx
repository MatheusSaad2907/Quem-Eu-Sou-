import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-8 py-6 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-50 dark:border-zinc-900 transition-colors duration-300">
            <div> <Link
            to="/" className="text-xl font-semibold tracking-tight dark:text-white">Quem Eu Sou?</Link></div>
            <div className="hidden md:flex space-x-8 text-sm font-medium dark:text-gray-400">
                <Link to="/" className="hover:text-gray-500 dark:hover:text-white transition-colors">Início</Link>
                <Link to="/personagens" className="hover:text-gray-500 dark:hover:text-white transition-colors">Personagens</Link>
                <Link to="/sobre" className="hover:text-gray-500 dark:hover:text-white transition-colors">Sobre</Link>
            </div>
            <button className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black text-sm font-medium rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all active:scale-95">
                Começar
            </button>
        </nav>
    )
}
export default Navbar;  