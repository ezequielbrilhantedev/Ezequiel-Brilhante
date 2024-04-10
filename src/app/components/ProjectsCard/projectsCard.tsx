import Image from 'next/image'
import Link from 'next/link'

export function ProjectsCard() {
  return (
    <>
      <div className="mobile:grid mobile:px-5 flex gap-5">
        <div>
          <Link
            href="https://github.com/ezequielbrilhantedev/devstore"
            target="_blank"
            className="group relative"
          >
            <Image
              src="/devStore.png"
              width={390}
              height={47}
              quality={100}
              alt=""
              className="rounded-2xl cursor-pointer group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>
        <div>
          <Link
            href="https://github.com/ezequielbrilhantedev/DT-Money"
            target="_blank"
            className="group relative"
          >
            <Image
              src="/DTMoney2.png"
              width={390}
              height={20}
              quality={100}
              alt=""
              className="rounded-2xl cursor-pointer group-hover:scale-105 transition-transform duration-500"
            />
          </Link>
        </div>
      </div>
      <Link
        href="https://github.com/ezequielbrilhantedev"
        className="group relative"
      >
        <h1 className="text-violet-400 font-extrabold text-base  group-hover:scale-105 transition-transform duration-500">
          Veja mais em meu GitHub
        </h1>
      </Link>
    </>
  )
}
