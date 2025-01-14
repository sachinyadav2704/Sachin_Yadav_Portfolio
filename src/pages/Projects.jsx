import React from 'react';
import JioFitImg from '../assets/images/fitness_img.png';
import JioReelsImg from '../assets/images/jio-digital_img.jpeg';
import JioAdsImg from '../assets/images/jioads_img.webp';
import { Collapse } from 'antd';
import { useTranslation } from 'react-i18next';

const { Panel } = Collapse;

const Projects = () => {
   const { t } = useTranslation();
   console.log('Translations ===>', t);

   const projects = t('projects.listProjects', { returnObjects: true });

   const renderTechStack = techStack => {
      const stackArray = techStack.split(', ');
      return stackArray.map(tech => (
         <span className="text-xs bg-slate-300 text-gray-700 m-1 px-4 py-1 inline-flex rounded-xl" key={tech}>
            {tech}
         </span>
      ));
   };

   return (
      <section id="projects" className="py-20">
         <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 dark:text-white">{t('projects.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {projects.map((project, idx) => (
                  <div key={idx} className="project-card bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
                     <div className="h-48 bg-gray-200 dark:bg-gray-600 contents cursor-pointer">
                        <img
                           className="transition duration-300 ease-in-out hover:scale-110"
                           onClick={() => window.open(project.url, '_blank')}
                           src={idx === 0 ? JioFitImg : idx === 1 ? JioReelsImg : JioAdsImg}
                           alt={project.title}
                        />
                     </div>
                     <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white cursor-pointer" onClick={() => window.open(project.url, '_blank')}>
                           {project.title}
                        </h3>
                        <Collapse bordered={false} className="rounded-lg bg-white">
                           <Panel className="text-xs text-gray-600 m-1 p-0 bg-slate-100 rounded-lg" header="Description" key={1}>
                              {project.description}
                           </Panel>
                           <Panel className="text-xs text-gray-600 m-1 p-0 bg-slate-100 rounded-lg" header="Role" key={2}>
                              {project.role}
                           </Panel>
                           {project.keyFeatures && (
                              <Panel className="text-xs text-gray-600 m-1 p-0 bg-slate-100 rounded-lg" header="Key Features" key={3}>
                                 {project.keyFeatures}
                              </Panel>
                           )}
                        </Collapse>
                        <div className="m-1 p-2 bg-slate-100 rounded-lg">
                           <h6 className="text-xs font-bold mb-0 text-gray-600 dark:text-white">Tech Stack</h6>
                           <p className="text-xs text-gray-500 dark:text-gray-400">{renderTechStack(project.tech)}</p>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default Projects;
