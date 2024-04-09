import { ReactNode } from 'react'
import Header from '../components/Header/header'

export default function LandingPageLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div className="mx-auto mobile:block grid min-h-screen w-full">
      <Header />
      {children}
    </div>
  )
}
