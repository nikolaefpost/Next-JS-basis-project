import React, { useState } from 'react'
import { withLayout } from '../Layout/Layout'
import { GetStaticProps, NextPage } from 'next'
import axios from 'axios'
import styles from '../styles/Home.module.scss'
import { MenuItem } from '../interface'
import { API } from '../helpers/api'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.home}>Выберите категорию:</div>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  })
  return {
    props: {
      menu,
      firstCategory,
    },
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[]
  firstCategory: number
}
