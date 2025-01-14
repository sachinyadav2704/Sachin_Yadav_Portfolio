// import ProfileImg from '../assets/images/Profile_img.avif';
import ProfileImg from '../assets/images/image4.png';
import { useTranslation } from 'react-i18next';
const About = () => {
   const { t } = useTranslation();
   return (
      <section id="about" className="py-20 bg-gray-200 dark:bg-gray-800">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">{t('about.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="w-full rounded-lg mx-0 my-auto flex items-center">
                  <img className="w-80 h-80 mx-auto transition duration-300 ease-in-out hover:scale-110 rounded-md" src={ProfileImg} />
               </div>
               <div>
                  <p className="text-gray-800">{t('about.description')}</p>
               </div>
            </div>
         </div>
      </section>
   );
};

export default About;
