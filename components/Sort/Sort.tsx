import React, { FC } from 'react'
import { SortEnum, SortProps } from './sort.props'
import SortIcon from './sort.svg'
import cn from 'classnames'
import styles from './sort.module.scss'

const Sort: FC<SortProps> = ({ sort, setSort, className, ...props }) => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <button
        className={cn({ [styles.active]: sort === SortEnum.Rating })}
        onClick={() => setSort(SortEnum.Rating)}
      >
        <SortIcon
          className={cn({ [styles.hidden]: sort === SortEnum.Rating })}
        />{' '}
        По рейтингу
      </button>
      <button
        className={cn({ [styles.active]: sort === SortEnum.Price })}
        onClick={() => setSort(SortEnum.Price)}
      >
        <SortIcon
          className={cn({ [styles.hidden]: sort === SortEnum.Price })}
        />{' '}
        По цене
      </button>
    </div>
  )
}

export default Sort
