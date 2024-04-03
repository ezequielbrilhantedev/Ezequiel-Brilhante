import { ReactNode } from 'react'
import Header from '../components/Header/header'

export default function LandingPageLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="mx-auto grid min-h-screen w-full grid-rows-[min-content_max-content] gap-5">
      <Header />
      {children}
    </div>
  )
}
