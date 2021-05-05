import React, { useEffect, useState } from "react";
import sanityClient from "../client.js";

export default function Project() {
    const [projectData, setProjectData] = useState(null);

    useEffect(() => {
        sanityClient.fetch(`*[_type == "project"]{
            title,
            date,
            place,
            description,
            project,
            link,
            tags
        }`).then((data) => setProjectData(data))
        .catch(console.error);
    }, []);

    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <section className="conatiner mx-auto">
                <h1 className="text-5xl flex justify-center cursive"> Projects 
                </h1>
                <h2 className="text-lg text-gray-500 flex justify-center py-6 mb-12"> WELCOME TO MY PROJECTS! 
                </h2>
                <section className="grid grid-cols-2 gap-8">
                    {projectData && 
                    projectData.map((project, index) => (
                    <article className="relative rounded-lg shadow-xl bg-white p-16">
                        <h3 className="text-blue-700 text-3xl font-bold mb-2 hover:text-yellow-500">
                            <a 
                                href={project.link}
                                alt={project.title}
                                target="blank"
                                rel="noopener noreferrer"
                            >
                                {project.title}
                            </a>
                        </h3>
                        <div className="text-gray-400 text-xs space-x-4">
                            <span>
                                <strong className="font-bold">Finished On</strong>:{" "}
                                {new Date(project.date).toLocaleDateString()}
                            </span>
                            <span>
                                <strong className="font-bold">Location</strong>:{" "}
                                {project.place}
                            </span>
                            <span>
                                <strong className="font-bold">Type</strong>:{" School"}
                                {project.projectType}
                            </span>
                            <p className="my-6 text-lg text-gray-600 leading-relaxed">
                                {project.description}
                            </p>
                            <a
                                href={project.link} 
                                rel="noopener noreferrer" 
                                target="blank"
                                className="text-red-500 font-bold hover:underline hover:text-gray-800 text-lg"
                            >
                            View The Project{" "}
                            <span 
                            role="img" 
                            aria-label="right pointer">
                                👉
                            </span>
                            </a>
                        </div>
                    </article>
    ))}
                </section>
            </section>
        </main>
    ) 
}