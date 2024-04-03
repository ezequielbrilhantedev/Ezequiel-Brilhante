'use client'

import { TypeAnimation } from 'react-type-animation'

export function TypeAnimationWriter() {
  return (
    <>
      <TypeAnimation
        sequence={['Frontend Developer.', 1000, '', 500]}
        speed={30}
        style={{ fontSize: '2.5rem', color: '#a78bfa' }}
        repeat={Infinity}
      />
    </>
  )
}
