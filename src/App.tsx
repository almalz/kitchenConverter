import React from 'react'
import tw from 'twin.macro'
import styled from '@emotion/styled'

import Converter from './components/Converter'
import Header from './components/Header'
// import ScalePicker from './components/ScalePicker'

const Layout = styled.div`
  ${tw`container mx-auto w-full flex`}
`

const App: React.FC = () => {
  return (
    <>
      <head>
        <title> Kitchen Converter </title>
      </head>
      <Header />
      <Layout>
        <Converter />
      </Layout>
    </>
  )
}

export default App
