import React from 'react'
import { withLayout } from '../Layout/Layout'
import { HTag } from '../components'
import { NextPage } from 'next'

export const Error404: NextPage = () => {
  return (
    <>
      <HTag tag="h1">Ошибка 404</HTag>
    </>
  )
}

export default withLayout(Error404)
