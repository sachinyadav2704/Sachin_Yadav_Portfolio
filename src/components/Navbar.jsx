/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';
import LanguageSelector from './LanguageSelector';
import ProfileImg from '../assets/images/icon_img.png';
import { useTranslation } from 'react-i18next';

const Navbar = ({ toggleTheme }) => {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const { t } = useTranslation();

   // const handleThemeToggle = () => toggleTheme();

   return (
      <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow-md z-50">
         <div style={{ padding: '0.5rem 8rem' }} className="flex-row mx-auto px-5 py-3 flex items-center justify-between">
            <div className="text-xl font-bold text-gray-800 dark:text-white">
               {/* SY */}
               <img width={50} src={ProfileImg} />
            </div>
            <button className="md:hidden text-gray-800 dark:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
               {!isMenuOpen ? <i className="bi bi-list text-2xl" /> : <i className="bi bi-crosshair text-2xl" />}
            </button>
            <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} md:items-center`}>
               <a
                  href="#home"
                  className="nav-link mx-1 text-gray-600 dark:text-gray-300 bg-gray-200 px-3 py-1 hover:bg-gray-300 transition duration-300 ease-in-out hover:scale-110 rounded-2xl"
               >
                  {t('navbar.home')}
               </a>
               <a
                  href="#about"
                  className="nav-link mx-1 text-gray-600 dark:text-gray-300 bg-gray-200 px-3 py-1 hover:bg-gray-300 transition duration-300 ease-in-out hover:scale-110 rounded-2xl"
               >
                  {t('navbar.about')}
               </a>
               <a
                  href="#projects"
                  className="nav-link mx-1 text-gray-600 dark:text-gray-300 bg-gray-200 px-3 py-1 hover:bg-gray-300 transition duration-300 ease-in-out hover:scale-110 rounded-2xl"
               >
                  {t('navbar.projects')}
               </a>
               <a
                  href="#skills"
                  className="nav-link mx-1 text-gray-600 dark:text-gray-300 bg-gray-200 px-3 py-1 hover:bg-gray-300 transition duration-300 ease-in-out hover:scale-110 rounded-2xl"
               >
                  {t('navbar.skills')}
               </a>
               <a
                  href="#education"
                  className="nav-link mx-1 text-gray-600 dark:text-gray-300 bg-gray-200 px-3 py-1 hover:bg-gray-300 transition duration-300 ease-in-out hover:scale-110 rounded-2xl"
               >
                  {t('navbar.education')}
               </a>
               <a
                  href="#contact"
                  className="nav-link mx-1 text-gray-600 dark:text-gray-300 bg-gray-200 px-3 py-1 hover:bg-gray-300 transition duration-300 ease-in-out hover:scale-110 rounded-2xl"
               >
                  {t('navbar.contact')}
               </a>
            </div>
            <LanguageSelector />
         </div>
      </nav>
   );
};

export default Navbar;
