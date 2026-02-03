import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'MERN Stack Development (Front-End)',
      company: 'Bdcalling Academy',
      period: 'Sep-2025 to Dec-2025',
      description: 'I learned the fundamentals of modern web development.',
      achievements: [
        'Developed 10+ responsive websites',
        'Learned React, Tailwind, Git/GitHub',
      ],
    },
   
    {
      type: 'education',
      title: 'Diploma in Engineering Conputer Science and Technology',
      company: 'Barishal Polytechnic Institute ',
      period: '2022 to Jan-2026',
      description: 'Foundation in computer science principles and software engineering.',
      achievements: [
        "Leader in 3 Group Project",
        "Participat a programing contest",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <div className="relative">

          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                <div className="absolute left-8 md:left-1/2 -ml-4 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg z-10">
                  {exp.type === 'work' ? (
                    <Briefcase className="w-4 h-4 text-white" />
                  ) : (
                    <GraduationCap className="w-4 h-4 text-white" />
                  )}
                </div>

                <div
                  className={`w-full md:w-[calc(50%-2rem)] ml-20 md:ml-0 ${
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  }`}
                >
                  <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {exp.title}
                    </h3>
                    
                    <p className="text-purple-600 dark:text-purple-400 font-medium mb-3">
                      {exp.company}
                    </p>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
