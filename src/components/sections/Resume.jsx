import { RevealOnScroll } from "../RevealOnScroll";
import resume from "../../assets/files/resume.pdf"; // Adjust the path as necessary
export const Resume = () => {
    return (
        <RevealOnScroll>
            <section
                id="resume"
                className="min-h-screen flex items-center justify-center py-20"
            >
                <div className="max-w-5xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Resume
                    </h2>
                    <p className="text-gray-400 mb-6 text-center">
                        Download my resume to learn more about my professional journey and skills.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href={resume}
                            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
                            download
                        >
                            Download
                        </a>
                    </div>
                </div>
            </section>
        </RevealOnScroll>
    );
}