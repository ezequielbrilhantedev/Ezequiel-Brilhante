'use client'

import { TypeAnimation } from 'react-type-animation'

export function TypeAnimationWriter() {
  return (
    <>
      <span className="mobile:text-xl">
        <TypeAnimation
          sequence={['Frontend Developer.', 1000, '', 500]}
          speed={30}
          style={{ color: '#a78bfa' }}
          repeat={Infinity}
        />
      </span>
    </>
  )
}
