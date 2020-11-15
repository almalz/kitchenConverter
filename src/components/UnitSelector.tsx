import React, { ChangeEvent } from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

import { Unit } from './../types/index'

interface Props {
  units: Unit[]
  handleSelectUnit: (e: ChangeEvent<HTMLSelectElement>) => void
}

const StyledUnitSelector = styled.select`
  ${tw`mx-16 mt-8 border rounded py-1 px-4`}
`

const UnitSelector: React.FC<Props> = (props) => {
  return (
    <StyledUnitSelector onChange={props.handleSelectUnit}>
      {props.units.map((unit) => {
        return (
          <option value={unit.name} key={unit.symbol}>
            {`${unit.symbol} - ${unit.name}`}
          </option>
        )
      })}
    </StyledUnitSelector>
  )
}

export default UnitSelector
