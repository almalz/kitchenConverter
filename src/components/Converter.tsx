import React, { ChangeEvent, useState } from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

import SidePanel from './SidePanel'
import Calculator from './Calculator'
import Alert from './Alert'
import { Unit } from './../types'
import { getAllScalesFromUnitList } from './../helpers'
import units from './../data/units.json'

const StyledContainer = styled.div`
  ${tw`mx-auto flex flex-col`}
`

const StyledUnitsContainer = styled.div`
  ${tw`mx-auto flex py-8`}
`

const Converter: React.FC = () => {
  const [selectedScaleInput, setSelectedScaleInput] = useState<string>('')
  const [selectedScaleOutput, setSelectedScaleOutput] = useState<string>('')
  const [inputUnit, setInputUnit] = useState<Unit>()
  const [outputUnit, setOutputUnit] = useState<Unit>()

  const handleSelectedScaleInput = (scale: string) =>
    setSelectedScaleInput(scale)

  const handleSelectedScaleOutput = (scale: string) =>
    setSelectedScaleOutput(scale)

  const handelSelectInputUnit = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedUnit = findUnitByName(e.target.value)
    setInputUnit(selectedUnit)
  }

  const handelSelectOutputUnit = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedUnit = findUnitByName(e.target.value)
    setOutputUnit(selectedUnit)
  }

  const findUnitByName: any = (name: string) => {
    return units.find((unit) => unit.name === name)
  }

  const scaleList = getAllScalesFromUnitList(units)

  console.log(inputUnit)
  console.log(outputUnit)

  return (
    <StyledContainer>
      <Alert message={'message'} type={'error'} />
      <StyledUnitsContainer>
        <SidePanel
          selectedScale={selectedScaleInput}
          handleSelectedScale={handleSelectedScaleInput}
          units={units.filter((unit) => unit.scale === selectedScaleInput)}
          scales={scaleList}
          handleSelectUnit={handelSelectInputUnit}
        />
        <SidePanel
          selectedScale={selectedScaleOutput}
          handleSelectedScale={handleSelectedScaleOutput}
          units={units.filter((unit) => unit.scale === selectedScaleOutput)}
          scales={scaleList}
          handleSelectUnit={handelSelectOutputUnit}
        />
      </StyledUnitsContainer>
      <Calculator inputUnit={inputUnit} outputUnit={outputUnit} />
    </StyledContainer>
  )
}

export default Converter
