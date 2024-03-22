import Image from 'next/image'

export default function Home() {
  return (
    <div className="px-40 py-20">
      <div className="flex gap-12 justify-center">
        <div>
          <Image
            src="/Ezequiel_Dev_Perfil.png"
            width={258}
            height={258}
            quality={100}
            alt=""
            style={{ borderRadius: '100%' }}
          />
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-xl">
            Meu nome é Ezequiel Brilhante e <br />
            sou Frontend Developer. <br />
            Seja muito bem-vindo(a) ao meu perfil!!!
          </p>

          <p className="py-10 text-xl">
            Atuo na área a cerca de 5 anos, e hoje minha maior especialidade é
            JavaScript atuando <br /> com a lib ReactJS na construção de
            interfaces. <br />
            Nem sempre fui frontend, já trabalhei também como backend com Java e
            FullStack <br /> com as stacks Angular (no front) e Python (no
            back). <br />
          </p>
        </div>
      </div>
    </div>
  )
}
