import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
        "Bootstrap",
        "Sass",
    ];
    const backendSkills = [
        "PHP", 
        "Laravel", 
        "OOP", 
        "MySQL", 
    ];
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                <p className="text-gray-300 text-center mb-6">
                    Passionate developer with expertise in building scalable web
                    applications and creating innovative solutions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                            { frontendSkills.map((tech, key) => (
                                <span
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                                "
                                >
                                {tech}
                                </span>
                            ))}
                            </div>
                    </div>
                    <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                        <h3 className="text-xl font-bold mb-4"> Backend</h3>
                        <div className="flex flex-wrap gap-2">
                            { backendSkills.map((tech, key) => (
                                <span key={key}
                                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li className="list-none">
                                    <strong>Computer Science</strong> <br></br>Shirak Regional State College, Armenia <br></br>(2018 - 2022)
                                </li>
                                <li className="list-none">
                                    <strong>Web Development</strong><br></br> TCO Team<br></br> Abovyan 248
                                    Gyumri, 3101, <br></br>Armenia Branch Office <br></br>(2023 - 2024)
                                </li>
                            </ul>
                    </div>
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li className="list-none">
                                    <strong>Web Developer Intern</strong> <br></br> TCO Team, Armenia <br></br>(2023 - Present)
                                </li>
                                <li className="list-none">
                                    <strong>Freelance Web Developer</strong><br></br> Remote Work<br></br>(2024 - 2025)
                                </li>
                            </ul>
                    </div>

                </div>
            </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}