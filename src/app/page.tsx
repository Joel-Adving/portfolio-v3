import Image from 'next/image'
import { FadeIn } from '../components/FadeIn'
import ThreeScene from '@/components/ThreeScene'
import Link from 'next/link'
import MailTo from '@/components/MailToBtn'

const fetchProjects = async (): Promise<
  {
    title: string
    description: string
    stack: string[]
    webpage: string
    github: string
    thumbnails: string[]
  }[]
> => {
  return await fetch(`${process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : ''}/projects.json`).then((res) =>
    res.json()
  )
}

export default async function Home() {
  const projects = await fetchProjects()

  return (
    <>
      <ThreeScene />
      <section className="bg-gradient-to-b from-[#001010] via-slate-900 to-slate-900 flex flex-col">
        <div className="h-[100dvh] grid place-content-center text-cyan-400 text-4xl sm:text-5xl font-thin uppercase tracking-widest">
          <FadeIn delay={0.15} duration={3}>
            Projects
          </FadeIn>
        </div>
        <div className="flex flex-col w-full max-w-md px-6 mx-auto space-y-12 lg:max-w-5xl lg:space-y-48 text-cyan-600">
          {projects.map((project, i) => (
            <FadeIn key={project.title} duration={1.2}>
              <div
                className={
                  i % 2 !== 0
                    ? 'flex lg:gap-12 flex-col-reverse lg:flex-row-reverse justify-center mr-auto lg:items-center'
                    : 'flex lg:gap-12 flex-col-reverse lg:flex-row ml-auto justify-center lg:items-center'
                }
              >
                <div className="flex flex-col pb-28 lg:py-20 last:pb-0">
                  <h3 className="mb-2 text-xl tracking-wide sm:mt-0 lg:font-thin lg:text-2xl text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="lg:text-md text-cyan-600">{project.description}</p>
                  <p className="my-2 text-cyan-700">{project.stack.join(', ')}</p>
                  <div className="flex space-x-3 underline text-cyan-400">
                    <a href={project.github} className="hover:text-cyan-200">
                      <p>Github</p>
                    </a>
                    <a href={project.webpage} className="hover:text-cyan-200">
                      <p>Live Demo</p>
                    </a>
                  </div>
                </div>
                <a href={project.webpage} className="w-full duration-200 hover:scale-[102%] xl:max-w-xl md:max-w-md ">
                  <div className={i === 1 ? 'opacity-70 ' : ''}>
                    <Image
                      src={project.thumbnails[0]}
                      alt="Project card"
                      priority
                      width={1280}
                      height={720}
                      className="w-full max-w-lg mb-6 rounded"
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
          <FadeIn duration={1.5}>
            <h2 className="mb-4 text-2xl font-thin tracking-wide text-center sm:mb-0 lg:tracking-widest sm:text-3xl lg:text-4xl text-cyan-400">
              CONTACT
            </h2>
          </FadeIn>
          <FadeIn duration={1.5} delay={0.33}>
            <div className="flex flex-col items-center justify-center mt-4 space-y-6 sm:space-y-0 lg:font-thin lg:text-xl lg:space-y-0 lg:mt-20 lg:space-x-24 sm:space-x-10 sm:flex-row text-cyan-400">
              <p className="hover:text-cyan-300 hover:underline">+46702082695</p>
              <MailTo />
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
        </div>
      </section>
    </>
  )
}
