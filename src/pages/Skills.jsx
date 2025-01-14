import { useTranslation } from 'react-i18next';

const Skills = () => {
   const { t } = useTranslation();

   return (
      <section id="skills" className="py-20 bg-gray-200 dark:bg-gray-800">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">{t('skills.title')}</h2>
            <div className="flex flex-wrap justify-around">
               <div className="card my-2">
                  <div className="header">Frontend</div>
                  <div className="body">
                     <div className="skill">
                        <div className="skill-name">React Js</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '80%' }}></div>
                        </div>
                        <div className="skill-percent-number">80%</div>
                     </div>
                     <div className="skill">
                        <div className="skill-name">Redux</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '75%' }}></div>
                        </div>
                        <div className="skill-percent-number">75%</div>
                     </div>
                     <div className="skill">
                        <div className="skill-name">HTML</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '70%' }}></div>
                        </div>
                        <div className="skill-percent-number">70%</div>
                     </div>
                     <div className="skill">
                        <div className="skill-name">CSS</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '70%' }}></div>
                        </div>
                        <div className="skill-percent-number">70%</div>
                     </div>
                     <div className="skill">
                        <div className="skill-name">React Native</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '40%' }}></div>
                        </div>
                        <div className="skill-percent-number">40%</div>
                     </div>
                  </div>
               </div>
               <div className="card my-2">
                  <div className="header">Backend</div>
                  <div className="body">
                     <div className="skill">
                        <div className="skill-name">Node Js</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '50%' }}></div>
                        </div>
                        <div className="skill-percent-number">50%</div>
                     </div>
                     <div className="skill">
                        <div className="skill-name">Express Js</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '45%' }}></div>
                        </div>
                        <div className="skill-percent-number">45%</div>
                     </div>
                     <div className="skill">
                        <div className="skill-name">Mongo DB</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '50%' }}></div>
                        </div>
                        <div className="skill-percent-number">50%</div>
                     </div>
                  </div>
               </div>
               <div className="card my-2">
                  <div className="header">UI Frameworks</div>
                  <div className="body">
                     <div className="skill">
                        <div className="skill-name">Ant Design</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '90%' }}></div>
                        </div>
                        <div className="skill-percent-number">90%</div>
                     </div>
                     <div className="skill">
                        <div className="skill-name">Material UI</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '50%' }}></div>
                        </div>
                        <div className="skill-percent-number">50%</div>
                     </div>
                     <div className="skill">
                        <div className="skill-name">Tailwind CSS</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '50%' }}></div>
                        </div>
                        <div className="skill-percent-number">50%</div>
                     </div>
                  </div>
               </div>
               <div className="card my-2">
                  <div className="header">Tools</div>
                  <div className="body">
                     <div className="skill">
                        <div className="skill-name">VS Code</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '80%' }}></div>
                        </div>
                        <div className="skill-percent-number">80%</div>
                     </div>
                     <div className="skill">
                        <div className="skill-name">Git</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '60%' }}></div>
                        </div>
                        <div className="skill-percent-number">60%</div>
                     </div>
                     <div className="skill">
                        <div className="skill-name">Dev Azure</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '50%' }}></div>
                        </div>
                        <div className="skill-percent-number">50%</div>
                     </div>
                  </div>
               </div>
               <div className="card my-2">
                  <div className="header">Soft Skills</div>
                  <div className="body">
                     <div className="skill">
                        <div className="skill-name">Problem Solving</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '85%' }}></div>
                        </div>
                        <div className="skill-percent-number">85%</div>
                     </div>
                     <div className="skill">
                        <div className="skill-name">Communication</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '100%' }}></div>
                        </div>
                        <div className="skill-percent-number">100%</div>
                     </div>
                     <div className="skill">
                        <div className="skill-name">Time Management</div>
                        <div className="skill-level">
                           <div className="skill-percent" style={{ width: '85%' }}></div>
                        </div>
                        <div className="skill-percent-number">85%</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Skills;
