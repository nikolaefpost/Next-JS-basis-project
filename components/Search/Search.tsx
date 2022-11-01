import React, { FC, useState } from 'react'
import { SearchProps } from './search.props'
import cn from 'classnames'
import SearchIcon from './search.svg'
import styles from './search.module.scss'
import Input from '../Input/Input'
import { useRouter } from 'next/router'

const Search: FC<SearchProps> = ({ className, ...props }) => {
  const router = useRouter()
  const [searchValue, setSearchValue] = useState<string>('')

  const onHandledChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSearchValue(e.currentTarget.value)
  }

  const onHandledKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.code === 'Enter') onHandledSearch()
  }

  const onHandledSearch = (): void => {
    router.push({
      pathname: '/search',
      query: {
        searchWord: searchValue,
      },
    })
  }

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        value={searchValue}
        placeholder="Поиск..."
        onChange={onHandledChange}
        onKeyDown={onHandledKeyDown}
      />
      <SearchIcon onClick={onHandledSearch} />
    </div>
  )
}

export default Search
