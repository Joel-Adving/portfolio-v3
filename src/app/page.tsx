'use client'

import Image from 'next/image'
import { SceneOne } from '../components/SceneOne'
import projects from '../content/projects.json'
import { useRef } from 'react'
import { mailTo } from '../utils/helpers'
import { FadeIn } from '../components/FadeIn'
import { useSmoothScrollPolyfill } from '../hooks/useSmoothScrollPolyfill'
import ThreeDScene from '@/components/3dScene'
import Link from 'next/link'

export default function Home() {
  //   const projectsRef = useRef<HTMLDivElement | null>(null)
  //   const heroRef = useRef<HTMLElement | null>(null)
  //   useSmoothScrollPolyfill()

  return (
    <>
      <div>
        <ThreeDScene />
        {/* <FadeIn instant={true} delay={1} duration={1.5}>
          <button
            // onClick={() =>
            //   projectsRef.current && projectsRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })
            // }
            className="absolute text-cyan-400 translate-x-1/2 right-1/2 bottom-[8vh] border-[1px] border-cyan-400 rounded-full p-1.5 md:p-3 hover:bg-cyan-900 duration-100 hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={24}
              height={24}
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
            </svg>
          </button>
        </FadeIn> */}
        <section className="bg-gradient-to-b from-[#001010] via-slate-900 to-slate-900 flex flex-col">
          <div className="mt-40 transition-all duration-200 mb-72 md:mb-80">
            <div className=" space-y-1 lg:space-y-3 transition-all duration-200 font-thin lg:tracking-[0.4em] text-center tracking-[0.25em] text-3xl sm:text-4xl lg:text-5xl xl:text-5xl text-cyan-400 mx-auto">
              <FadeIn delay={0.2} duration={1.5} direction="up">
                <h2>
                  {'<'}FRONT{'>'}
                </h2>
              </FadeIn>
              <FadeIn delay={1.5} duration={1.25}>
                <h2
                //  ref={projectsRef}
                >
                  {'{'}END{'}'}
                </h2>
              </FadeIn>
              <FadeIn delay={0.6} duration={1.25} direction="up">
                <h2>
                  {'</'}DEVELOPER{'>'}
                </h2>
              </FadeIn>
            </div>
          </div>
          <div className="flex flex-col w-full max-w-md px-10 mx-auto space-y-12 lg:max-w-5xl lg:space-y-48 text-cyan-600">
            {projects.map((project, i) => (
              <FadeIn key={project.title} duration={0.8} direction="up">
                <div
                  className={
                    i % 2 !== 0
                      ? 'flex lg:gap-12 flex-col-reverse lg:flex-row-reverse justify-center mr-auto lg:items-center'
                      : 'flex lg:gap-12 flex-col-reverse lg:flex-row ml-auto justify-center lg:items-center'
                  }
                >
                  <div className="flex flex-col pb-28 lg:py-20 last:pb-0">
                    <h3 className="mb-2 text-xl tracking-wide lg:font-thin lg:text-3xl text-cyan-400">
                      {project.title.toUpperCase()}
                    </h3>
                    <p className="lg:text-lg text-cyan-600">{project.description}</p>
                    <p className="my-1 text-cyan-800">Stack: {project.stack.join(', ')}</p>
                    <div className="flex space-x-3 underline text-cyan-600">
                      <a href={project.github} className="hover:text-cyan-400">
                        <p>Github</p>
                      </a>
                      <a href={project.webpage} className="hover:text-cyan-400">
                        <p>Live Demo</p>
                      </a>
                    </div>
                  </div>
                  <a href={project.webpage} className="w-full duration-200 hover:scale-[102%] xl:max-w-xl md:max-w-md ">
                    <div className={i === 1 ? 'opacity-70 ' : ''}>
                      <Image
                        src={project.thumbnails[0]}
                        alt="Project card"
                        width={1280}
                        height={720}
                        className="w-full max-w-lg rounded"
                      />
                    </div>
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="grid min-h-screen place-content-center bg-slate-900">
          <div className="flex flex-col items-center my-24 transition-all duration-200 md:my-44 sm:my-32">
            <FadeIn duration={1}>
              <h2 className="font-thin mb-4 sm:mb-0 lg:tracking-[0.15em] text-center tracking-wide text-3xl sm:text-4xl lg:text-5xl text-cyan-400">
                CONTACT
              </h2>
            </FadeIn>
            <FadeIn duration={1} delay={0.33}>
              <div className="flex flex-col items-center justify-center mt-4 space-y-6 sm:space-y-0 lg:font-thin lg:text-xl lg:space-y-0 lg:mt-20 lg:space-x-24 sm:space-x-10 sm:flex-row text-cyan-400">
                <p className="hover:text-cyan-300 hover:underline">+46702082695</p>
                <button
                  onClick={() => mailTo('joel.adving@gmail.com')}
                  className="lg:font-thin hover:text-cyan-300 hover:underline"
                >
                  joel.adving@gmail.com
                </button>
                <Link
                  className="hover:text-cyan-300 hover:underline"
                  href="https://www.linkedin.com/in/joel-adving-3385571a0/"
                >
                  Linkedin
                </Link>
                <Link className="hover:text-cyan-300 hover:underline" href="https://github.com/Joel-Adving">
                  GitHub
                </Link>
              </div>
            </FadeIn>

            {/* <FadeIn duration={1} delay={0.66}>
              <button
                // onClick={() => heroRef.current && heroRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="lg:mt-28 mt-12 text-cyan-400  border-[1px] border-cyan-400 rounded-full p-1.5 md:p-3 hover:bg-cyan-900 duration-100 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  width={24}
                  height={24}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7l4-4m0 0l4 4m-4-4v18" />
                </svg>
              </button>
            </FadeIn> */}
          </div>
        </section>
      </div>
    </>
  )
}
