import React, { useState } from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

import { Unit } from './../types'

interface Props {
  inputUnit: Unit | undefined
  outputUnit: Unit | undefined
}

const StyledContainer = styled.div`
  ${tw`w-full mx-auto flex justify-around pt-8`}
`

const ConversionInput = styled.input`
  ${tw`border border-b-2 border-gray-300 bg-white rounded-t py-1 px-4 pt-2`}
`

const ConversionOutput = styled.input`
  ${tw`border-b-2 border-gray-600 bg-gray-200 rounded-t py-1 px-4 pt-2`}
`

const Calculator: React.FC<Props> = () => {
  const [inputValue, setInputValue] = useState<number>()

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseFloat(e.target.value))
  }

  return (
    <StyledContainer>
      <ConversionInput
        type="text"
        id="input"
        name="input"
        onChange={handleChangeInput}
      ></ConversionInput>
      <ConversionOutput
        type="text"
        id="output"
        name="output"
        disabled={true}
      ></ConversionOutput>
    </StyledContainer>
  )
}

export default Calculator
