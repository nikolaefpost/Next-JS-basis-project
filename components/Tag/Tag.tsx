import React, { FC } from 'react'
import cn from 'classnames'
import { TagProps } from './Tag.props'

import styles from './Tag.module.scss'

const Tag: FC<TagProps> = ({
  children,
  link,
  size = 's',
  color = 'ghost',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.l]: size === 'l',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      {link ? <a href={link}>{children}</a> : <>{children}</>}
    </div>
  )
}

export default Tag
