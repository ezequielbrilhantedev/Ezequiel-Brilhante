import Image from 'next/image'
import Link from 'next/link'

export function Experience() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex gap-4">
        <div>
          <Image
            src="https://media.licdn.com/dms/image/D4D0BAQGLnT9haDSJcQ/company-logo_100_100/0/1685540823388/accenturebrasil_logo?e=1720656000&v=beta&t=uZrUD5j7Qw4RCy54nKfH_OMwtA-e9e7pOGZkb2WPnd4"
            width={48}
            height={48}
            quality={100}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold">Frontend Developer</h1>
          <h5>Accenture Brasil</h5>
          <p className="text-gray-400">
            Jul 2021 - Present · 2 yrs 10 mos <br />
            Brazil · Remote
          </p>
        </div>
      </div>
      <div>
        <p>
          - Projeto Fabrica Digitais D Intacta, Cliente Bayer ( Utilizei
          framework ReactJS com Typescript ) <br />
          - Projeto HUB Impulso, Cliente Bayer ( Utilizei framework ReactJS com
          Typescript ) <br />
          - Projeto AgroBayer, Cliente Bayer ( Utilizei framework Angular e
          também ReactJS, junto com Typescript ) <br />- No primeiro projeto
          atuei como frontend usando o framework Angular em um projeto do
          Santander, criando o DevPortal.
        </p>
      </div>

      <div className="border border-solid border-gray-500" />

      <div className="flex gap-4">
        <div>
          <Image
            src="https://media.licdn.com/dms/image/D4D0BAQGTeX2C9eb3iQ/company-logo_100_100/0/1709578147693?e=1720656000&v=beta&t=SKIfPp0UyS1TwY2yGaQOTl6Lf_bWS6gc9M30IRskW60"
            width={48}
            height={48}
            quality={100}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold">Full Stack Developer</h1>
          <h5>Intmed Software · Full-time</h5>
          <p className="text-gray-400">
            Jan 2020 - Jul 2021 · 1 yr 7 mos <br />
            Fortaleza e Região, Brasil
          </p>
        </div>
      </div>
      <div>
        <p>
          Atuando com desenvolvimento de softwares voltados para clientes na
          área da saúde. <br /> Tecnologias: Python (Django e Django
          RestFramework) e Angular
        </p>
      </div>
      <div className="text-center">
        <Link
          href="https://www.linkedin.com/in/ezequiel-brilhante/"
          className="group relative"
        >
          <h1 className="text-violet-400 font-extrabold text-base  group-hover:scale-105 transition-transform duration-500">
            Veja o restante em meu LinkedIn
          </h1>
        </Link>
      </div>
    </div>
  )
}
