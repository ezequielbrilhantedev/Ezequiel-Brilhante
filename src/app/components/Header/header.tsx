import Link from 'next/link'

export default function Header() {
  return (
    <div className="bg-zinc-950 flex items-center justify-between h-20 py-10 px-40">
      <div className="">
        <Link href="/" className="font-sans">
          Ezequiel Brilhante Dev
        </Link>
      </div>

      <div className="flex gap-8">
        <Link href="/" className="font-sans">
          Home
        </Link>
        <div></div>
        <Link href="/" className="font-sans">
          About
        </Link>
        <Link
          href="https://github.com/ezequielbrilhantedev"
          target="_blank"
          className="font-sans"
        >
          GitHub
        </Link>
      </div>
    </div>
  )
}
