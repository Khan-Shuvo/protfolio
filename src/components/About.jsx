import { motion } from 'motion/react';
import { Code, Palette, Zap, Heart } from 'lucide-react';

export function About() {
    const highlights = [
        {
            icon: Code,
            title: 'Clean Code',
            description: 'Writing maintainable and scalable code',
        },
        {
            icon: Palette,
            title: 'Design Focused',
            description: 'Creating beautiful user interfaces',
        },
        {
            icon: Zap,
            title: 'Performance',
            description: 'Optimized for speed and efficiency',
        },
        {
            icon: Heart,
            title: 'User-Centric',
            description: 'Building with users in mind',
        },
    ];

    return (
        <section
            id="about"
            className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
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
                        About Me
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>

                            <div className="relative bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 aspect-square flex items-center justify-center">
                                <div className="text-center">
                                    <img
                                        src="/profile.png"   // put image inside public folder
                                        alt="Md. Shuvo Khan"
                                        className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-2xl border-4 border-white dark:border-gray-700"
                                    />
                                    <p className="text-gray-700 dark:text-gray-300 font-medium uppercase">
                                        md. shuvo khan
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                            Passionate Developer
                        </h3>

                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            Aspiring web developer with practical experience in React and Tailwind CSS, focused on building clean and user-friendly web applications.
                            I love turning ideas into real projects and solving problems through code.
                            As a fresher, I am highly motivated to learn, grow, and contribute to real-world development teams.
                        </p>

                        <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                            My journey in tech started with a curiosity for how things work on the web, and
                            it has evolved into a career where I get to combine creativity with technology
                            every single day. I love learning new technologies and staying up-to-date with
                            the latest industry trends.
                        </p>
                        
                        <div className="grid grid-cols-2 gap-4 pt-6">
                            {highlights.map((item, index) => (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                                >
                                    <item.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-2" />
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
