import React, { FC } from 'react'
import { FooterProps } from './Footer.props'
import cn from 'classnames'
import { format } from 'date-fns'

import styles from './Footer.module.scss'

const Footer: FC<FooterProps> = ({ className, ...props }) => {
  return (
    <footer {...props} className={cn(className, styles.content)}>
      <div>OwlTop © {format(new Date(), 'yyyy')} Все права защищены</div>
      <a>Пользовательское соглашение</a>
      <a>Политика конфиденциальности</a>
    </footer>
  )
}

export default Footer
