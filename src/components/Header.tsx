import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

const StyledHeader = styled.div`
  ${tw`mx-4 mt-8 pb-8 flex justify-center`}
`
const StyledHeaderText = styled.h1`
  ${tw`text-gray-900 text-4xl mx-auto`}
`

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledHeaderText>Kitchen Unit Converter</StyledHeaderText>
    </StyledHeader>
  )
}

export default Header
