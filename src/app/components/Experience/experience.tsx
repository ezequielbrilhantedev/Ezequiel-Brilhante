import Image from 'next/image'

export function Experience() {
  return (
    <div className="flex gap-4">
      <div>
        <Image
          src="/accenturebrasil_logo.jpeg"
          width={48}
          height={48}
          quality={100}
          alt=""
        />
      </div>
      <div>
        <h1>Frontend Developer</h1>
        <h5>Accenture Brasil</h5>
      </div>
    </div>
  )
}
