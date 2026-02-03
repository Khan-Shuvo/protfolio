import { motion } from 'motion/react';
import {
    Code2,
    Palette,
    GitBranch,
    Smartphone,
    Globe,
    Layers,
    Boxes
} from 'lucide-react';

export function Skills() {
    const skillCategories = [
        {
            category: 'Frontend',
            icon: Code2,
            skills: ['HTML', 'CSS/Sass', 'JavaScript', 'React', 'Tailwind CSS', 'TypeScript'],
        },
        {
            category: 'Design',
            icon: Palette,
            skills: ['UI/UX Design', 'Figma', 'Responsive Design'],
        },
        {
            category: 'Tools',
            icon: GitBranch,
            skills: ['Git/GitHub', 'VS Code', 'Vite', 'npm'],
        },
    ];

    const techStack = [
        { name: 'HTML5', icon: Globe, color: 'text-orange-500' },
        { name: 'CSS3', icon: Palette, color: 'text-blue-500' },
        { name: 'JavaScript', icon: Code2, color: 'text-yellow-500' },
        { name: 'React', icon: Layers, color: 'text-cyan-500' },
        { name: 'Tailwind', icon: Boxes, color: 'text-teal-500' },
        { name: 'Git', icon: GitBranch, color: 'text-red-500' },
        { name: 'Responsive', icon: Smartphone, color: 'text-purple-500' },
    ];

    return (
        <section
            id="skills"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
        >
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Skills & Expertise
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        A comprehensive overview of my technical skills and proficiencies
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16 "
                >
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                        >
                            <tech.icon className={`w-10 h-10 ${tech.color} mb-3`} />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                            className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
                        >
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg mr-4">
                                    <category.icon className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {category.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                                        whileHover={{ scale: 1.05 }}
                                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 rounded-full font-medium border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}