import React, { ChangeEvent } from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

import ScalePicker from './ScalePicker'
import UnitSelector from './UnitSelector'
import { Unit } from './../types'

interface Props {
  handleSelectedScale: (scale: string) => void
  selectedScale: string
  units: Unit[]
  scales: string[]
  handleSelectUnit: (e: ChangeEvent<HTMLSelectElement>) => void
}

const StyledSideContainer = styled.div`
  ${tw`flex w-auto justify-center flex-col bg-gray-200 py-16 rounded-lg mx-4 shadow-lg`}
`

const SidePanel: React.FC<Props> = (props) => {
  return (
    <StyledSideContainer>
      <ScalePicker {...props} />
      <UnitSelector {...props} />
    </StyledSideContainer>
  )
}

export default SidePanel
