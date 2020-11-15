import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

import { Unit } from './../types'

interface Props {
  handleSelectedScale: (scale: string) => void
  selectedScale: string
  units: Unit[]
  scales: string[]
}

const StyledScalePicker: React.FC = styled.div`
  ${tw`mx-16`}
`

const LeftButton = styled.button`
  ${tw`bg-gray-700 hover:bg-gray-500 shadow-sm disabled:bg-gray-400 text-gray-100 disabled:text-gray-600 font-bold py-2 px-4 rounded-l-lg`}
`

const MiddleButton = styled.button`
  ${tw`bg-gray-700 hover:bg-gray-500 shadow-sm disabled:bg-gray-400 text-gray-100 disabled:text-gray-600 font-bold py-2 px-4`}
`

const RightButton = styled.button`
  ${tw`bg-gray-700 hover:bg-gray-500 shadow-sm disabled:bg-gray-400 text-gray-100 disabled:text-gray-600 font-bold py-2 px-4 rounded-r-lg`}
`

const ScalePicker: React.FC<Props> = (props) => {
  return (
    <StyledScalePicker>
      <LeftButton
        onClick={() => props.handleSelectedScale(props.scales[0])}
        disabled={props.selectedScale === props.scales[0]}
      >
        {props.scales[0]}
      </LeftButton>
      <MiddleButton
        onClick={() => props.handleSelectedScale(props.scales[1])}
        disabled={props.selectedScale === props.scales[1]}
      >
        {props.scales[1]}
      </MiddleButton>
      <RightButton
        onClick={() => props.handleSelectedScale(props.scales[2])}
        disabled={props.selectedScale === props.scales[2]}
      >
        {props.scales[2]}
      </RightButton>
    </StyledScalePicker>
  )
}

export default ScalePicker
