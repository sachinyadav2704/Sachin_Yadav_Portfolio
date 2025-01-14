/* eslint-disable react/no-unescaped-entities */
// import ProfileImg from '../assets/images/Profile_img.avif';
// import ProfileImg from '../assets/images/About_me.avif';
import ProfileImg from '../assets/images/image2.png';
import { useTranslation } from 'react-i18next';
const Home = () => {
   const { t } = useTranslation();
   console.log(t);
   return (
      <section id="home" className="min-h-screen pt-20 flex items-center">
         <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
               <div className="md:w-1/2">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
                     {t('home.greeting')} <span className="playwrite-at-google-fonts">{t('home.name')}</span>
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{t('home.description')}</p>
                  <a href="#contact" className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                     {t('home.getInTouch')}
                  </a>
               </div>
               <div className="md:w-1/2 mt-10 md:mt-0">
                  <div className="w-120 h-120 mx-auto rounded-full">
                     <img className="transition duration-300 ease-in-out mx-auto hover:scale-110" src={ProfileImg} style={{ borderRadius: '50%' }} />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Home;
