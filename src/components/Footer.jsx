// export default Footer;
import { useTranslation } from 'react-i18next';
const Footer = () => {
   const { t } = useTranslation();
   return (
      <footer className="bg-gray-800 text-white py-8">
         <div className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-6">
               <a href="https://github.com/sachinyadav2704" className="hover:text-blue-500 transition">
                  <i className="bi bi-github"></i>
               </a>
               <a href="https://www.linkedin.com/in/sachin-yadav-b57426141/" className="hover:text-blue-500 transition">
                  <i className="bi bi-linkedin"></i>
               </a>
               <a href="https://www.instagram.com/myself.sachin_yadav/" className="hover:text-blue-500 transition">
                  <i className="bi bi-instagram"></i>
               </a>
               <a href="#" className="hover:text-blue-500 transition">
                  <i className="bi bi-whatsapp"></i>
               </a>
            </div>
            <p>{t('footer')}</p>
         </div>
      </footer>
   );
};

export default Footer;
