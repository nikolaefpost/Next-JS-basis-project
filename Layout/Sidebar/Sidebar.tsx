import React, { FC } from 'react'
import { SidebarProps } from './Sidebar.props'
import Menu from '../Menu/Menu'
import Logo from '../logo.svg'
import cn from 'classnames'

import styles from './Sidebar.module.scss'
import { Search } from '../../components'

const Sidebar: FC<SidebarProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={cn(className, styles.sidebar)}>
      <Logo className={styles.logo} />
      <Search />
      <Menu />
    </div>
  )
}

export default Sidebar
