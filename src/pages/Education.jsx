import { useTranslation } from 'react-i18next';
import './education.css';

const Education = () => {
   const { t } = useTranslation();
   const skills = [
      {
         name: 'SRM IST, Delhi-NCR',
         imgUrl: 'https://www.srmup.in/images/srm-delhi.jpg',
         yearPassout: '2020',
         board: 'SRM University',
         specialized: 'Bachelor of Technology - CSE',
         percentage: '78%',
      },
      {
         name: 'SKD Academy, Rajajiuram',
         imgUrl: 'https://www.yayskool.com/images/school/s-k-d-academy-lucknow-510612284.png',
         yearPassout: '2015',
         board: 'ISC',
         specialized: 'Intermediate - PCM',
         percentage: '76%',
      },
      {
         name: 'SKD Academy, Rajajiuram',
         imgUrl: 'https://www.yayskool.com/images/school/s-k-d-academy-lucknow-510612284.png',
         yearPassout: '2013',
         board: 'ICSE',
         specialized: 'High School',
         percentage: '69%',
      },
   ];
   return (
      <section id="education" className="py-20">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">{t('education.title')}</h2>
            <div className="flex flex-wrap justify-around">
               {skills.map((sk, index) => {
                  return (
                     <div className="flip-card">
                        <div className="flip-card-inner">
                           <div className="flip-card-front">
                              <div className="p-1">
                                 <img src={sk.imgUrl} className="rounded-md" />
                              </div>
                              <div>{sk.name}</div>
                           </div>
                           <div className="flip-card-back">
                              <div>
                                 <p>{sk.name}</p>
                                 <p>{sk.specialized}</p>
                                 <p>Batch - {sk.yearPassout} passout</p>
                                 <p>Percentage - {sk.percentage}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default Education;
