import React from 'react'
import { logo } from '../assets'

function Logo({ width = "9", height = "9"}) {
  return (
      <img src={logo} className={`w-${width} h-${height} object-contain`} />
  )
}

export default Logo