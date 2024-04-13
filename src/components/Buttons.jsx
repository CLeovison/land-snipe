import React from 'react'

export default function Buttons({onClick,label}) {
  return (
    <>
    <button onClick={onClick}>{label}</button>
    </>
  )
}
