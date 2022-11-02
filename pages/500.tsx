import React from 'react'
import { withLayout } from '../Layout/Layout'
import { HTag } from '../components'
import { NextPage } from 'next'

const Error500: NextPage = () => {
  return (
    <>
      <HTag tag="h1">Ошибка 500</HTag>
    </>
  )
}

export default withLayout(Error500)
