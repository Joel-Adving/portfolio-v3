import { Loader } from '@react-three/drei'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useIsSSR } from '../hooks/useIsSSR'
import { SceneOne } from '../scenes/SceneOne'
import projects from '../content/projects.json'
import { useRef } from 'react'

const Home: NextPage = () => {
    const [isSSR] = useIsSSR()
    const projectsRef = useRef<any>()

    return (
        <div className="min-h-screen">
            {!isSSR && <Loader />}
            <section className="relative ">
                <SceneOne />
            </section>
            <button
                onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="absolute text-cyan-200 translate-x-1/2 right-1/2 bottom-[8vh] border-[1px] border-cyan-200 rounded-full p-3"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                </svg>
            </button>
            <div ref={projectsRef}></div>
            <section className="bg-gradient-to-b from-[#001010] via-slate-900 to-slate-900 flex flex-col px-10">
                <h2 className="font-thin lg:tracking-[0.4em] text-center tracking-widest text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-cyan-400 xl:my-80 md:my-60 my-48">
                    PROJECTS
                </h2>
                <div className="flex flex-col w-full max-w-md mx-auto space-y-24 lg:max-w-7xl xl:space-y-80 lg:space-y-60 text-cyan-600 ">
                    {projects.map((project, i) => (
                        <div
                            key={project.title}
                            className={
                                i % 2 !== 0
                                    ? 'flex lg:gap-12 flex-col-reverse lg:flex-row-reverse justify-center mr-auto lg:items-center'
                                    : 'flex lg:gap-12 flex-col-reverse lg:flex-row ml-auto justify-center lg:items-center'
                            }
                        >
                            <div className="flex flex-col pb-28 lg:py-20 last:pb-0">
                                <h3 className="my-4 text-xl tracking-wider lg:text-3xl text-cyan-400 lg:font-thin">
                                    {project.title.toUpperCase()}
                                </h3>
                                <p className="lg:text-lg">{project.description}</p>
                                <p className="my-1 text-cyan-800">Stack: {project.stack.join(', ')}</p>
                                <div className="flex space-x-3 underline text-cyan-600">
                                    <a href={project.github}>
                                        <p>Github</p>
                                    </a>
                                    <a href={project.webpage}>
                                        <p>Live Demo</p>
                                    </a>
                                </div>
                            </div>
                            <div
                                className={
                                    i === 1
                                        ? 'xl:max-w-xl md:max-w-md opacity-70 w-full '
                                        : 'xl:max-w-xl md:max-w-md w-full '
                                }
                            >
                                <Image src={project.thumbnails[0]} width={1280} height={720} className="rounded " />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="grid min-h-screen place-content-center bg-slate-900">
                <div className="my-24 xl:my-80 md:my-44 sm:my-32">
                    <h2 className="font-thin lg:tracking-[0.4em] text-center tracking-widest text-4xl sm:text-5xl lg:text-6xl  text-cyan-400">
                        CONTACT
                    </h2>

                    <ul className="flex flex-col items-center justify-center mt-10 space-y-2 lg:font-thin lg:text-xl md:space-y-0 lg:mt-24 lg:space-x-36 sm:space-x-10 sm:flex-row text-cyan-600">
                        <li>+46702082695</li>
                        <li>joel.adving@gmail.com</li>
                        <li>
                            <a href="https://www.linkedin.com/in/joel-adving-3385571a0/">Linkedin</a>
                        </li>
                        <li>
                            <a href="https://github.com/Joel-Adving">GitHub</a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}

export default Home
