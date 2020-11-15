import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

interface Props {
  type: string
  message: string
}

const Alert: React.FC<Props> = ({ type, message }) => {
  return (
    <div
      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4"
      role="alert"
    >
      <p className="font-bold">Error</p>
      <p>Something not ideal might be happening.</p>
    </div>
  )
}

export default Alert
