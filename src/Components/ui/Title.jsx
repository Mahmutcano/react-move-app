import React from 'react'

export default function Title({children}) {
  return (
    <h3 className="font-semibold mb-3 text-gray-500 text-[20px] text-right">{children}</h3>
  )
}