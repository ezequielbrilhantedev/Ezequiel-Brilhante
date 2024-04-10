import Image from 'next/image'

import { Tooltip } from '@nextui-org/react'
import { TypeAnimationWriter } from '@/app/components/TypeAnimationWritter/type-animation-writer'
import { ProjectsCard } from '@/app/components/ProjectsCard/projectsCard'
import { Experience } from '@/app/components/Experience/experience'
import { ScrollToTop } from '@/app/components/ScrollToTop/scroll-to-top'

export default function Home() {
  return (
    <div className="tablet:px-20 laptop:px-40 desktop:px-40 py-20">
      <div
        className="grid laptop:flex desktop:flex
       gap-12 justify-center min-h-[34%] items-center"
      >
        <div className="min-w-80 mobile:flex mobile:justify-center">
          <Image
            src="/Ezequiel_Dev_Perfil.png"
            width={400}
            height={400}
            quality={100}
            alt=""
            className="rounded-full mobile:w-72"
          />
        </div>
        <div className="flex flex-col justify-end mobile:px-5">
          <p className="text-4xl font-bold mobile:text-xl mobile:text-center">
            <span className="text-5xl mobile:text-3xl">Olá,</span> <br />
            meu nome é{' '}
            <span className="text-violet-400 mobile:text-xl">
              Ezequiel Brilhante
            </span>{' '}
            e <br />
            sou <TypeAnimationWriter />
            <br />
          </p>

          <p className="py-10 mobile:text-xl mobile:text-center text-2xl max-w-3xl">
            Ao longo da minha carreira, tive a oportunidade de trabalhar em
            diversos projetos de sucesso. Além de frontend com ReactJs, também
            possuo experiência em desenvolvimento FullStack com as stacks
            Angular e Python. Tenho paixão por criar interfaces intuitivas e que
            proporcionem uma ótima experiência para os usuários. Meu objetivo de
            carreira é me tornar um líder técnico e contribuir para o
            desenvolvimento de softwares inovadores.
          </p>
        </div>
      </div>

      {/* <div className="flex justify-center pb-10">
        <div>
          <button className="border-2 border-s-white rounded-full w-44 h-16 text-xl hover:bg-violet-400 duration-200 font-bold">
            Download CV
          </button>
        </div>
      </div> */}

      <div className="py-10">
        <div className="flex items-center flex-col gap-8">
          <h5 className="uppercase text-violet-400 font-extrabold text-xl">
            Conhecimentos em
          </h5>
          <div className="flex mobile:gap-4 gap-12 mobile:max-w-80 max-w-md">
            <Tooltip content="JavaScript" placement="bottom">
              <Image
                src="/javascript.png"
                width={50}
                height={47}
                quality={100}
                alt=""
              />
            </Tooltip>
            <Tooltip content="NextJS" placement="bottom">
              <Image
                src="/nextJS.png"
                width={50}
                height={47}
                quality={100}
                alt=""
              />
            </Tooltip>
            <Tooltip content="HTML" placement="bottom">
              <Image
                src="/html.png"
                width={50}
                height={47}
                quality={100}
                alt=""
              />
            </Tooltip>
            <Tooltip content="CSS" placement="bottom">
              <Image
                src="/css.png"
                width={50}
                height={47}
                quality={100}
                alt=""
              />
            </Tooltip>
            <Tooltip content="ReactJS" placement="bottom">
              <Image
                src="/reactjs.png"
                width={50}
                height={47}
                quality={100}
                alt=""
              />
            </Tooltip>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center pt-20 gap-8">
        <h1 className="uppercase text-violet-400 font-extrabold text-xl">
          Projetos
        </h1>
        <ProjectsCard />
      </div>

      <div className="pt-24">
        <div className="flex justify-center">
          <h1 className=" uppercase text-violet-400 font-extrabold text-xl">
            Experiência Profissional
          </h1>
        </div>
        <div className="w-[100%] px-[10%] py-5">
          <Experience />
        </div>
      </div>

      <ScrollToTop />
    </div>
  )
}
