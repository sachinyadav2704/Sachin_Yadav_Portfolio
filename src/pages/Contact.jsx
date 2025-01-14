import { useTranslation } from 'react-i18next';
const Contact = () => {
   const { t } = useTranslation();
   return (
      <section id="contact" className="py-20 bg-gray-200 dark:bg-gray-800">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">{t('contactMe.title')}</h2>
            <div className="max-w-lg mx-auto">
               <form className="space-y-6">
                  <input type="text" placeholder="Name" required className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
                  <input type="email" placeholder="Email" required className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600" />
                  <textarea
                     placeholder="Message"
                     required
                     className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                     rows="4"
                  ></textarea>
                  <button type="submit" className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
                     {t('contactMe.sendMsg')}
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};

export default Contact;
