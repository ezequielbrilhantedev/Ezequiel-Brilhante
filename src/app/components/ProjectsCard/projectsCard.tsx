import Image from 'next/image'

export function ProjectsCard() {
  return (
    <div>
      <div>
        <Image
          src="/devStore.png"
          width={50}
          height={47}
          quality={100}
          alt=""
        />
      </div>
      <div>
        <Image src="/DTMoney.png" width={50} height={47} quality={100} alt="" />
      </div>
    </div>
  )
}
