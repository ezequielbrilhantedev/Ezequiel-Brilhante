import Image from 'next/image'

import { Tooltip } from '@nextui-org/react'
import { TypeAnimationWriter } from '@/app/components/TypeAnimationWritter/type-animation-writer'
import { ProjectsCard } from '@/app/components/ProjectsCard/projectsCard'
import { Experience } from '@/app/components/Experience/experience'

export default function Home() {
  return (
    <div className="px-40 py-20">
      <div className="flex gap-12 justify-center min-h-[50%] items-center">
        <div className="min-w-80">
          <Image
            src="/Ezequiel_Dev_Perfil.png"
            width={400}
            height={400}
            quality={100}
            alt=""
            style={{ borderRadius: '100%' }}
          />
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-4xl font-bold ">
            <span className="text-5xl">Olá,</span> <br />
            meu nome é{' '}
            <span className="text-violet-400">Ezequiel Brilhante</span> e <br />
            sou <TypeAnimationWriter />
            <br />
          </p>

          <p className="py-10 text-2xl max-w-3xl">
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

      <div className="flex justify-center pb-10">
        <div>
          <button className="border-2 border-s-white rounded-full w-44 h-16 text-xl hover:bg-violet-400 duration-200 font-bold">
            Download CV
          </button>
        </div>
      </div>

      <div className="py-10">
        <div className="flex items-center flex-col gap-8">
          <h5 className="uppercase text-violet-400 font-extrabold text-xl">
            Conhecimentos em
          </h5>
          <div className="flex gap-12 max-w-md">
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
        <div className="px-52 py-5">
          <Experience />
        </div>
      </div>
    </div>
  )
}
