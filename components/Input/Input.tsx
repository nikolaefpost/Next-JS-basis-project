import React, { ForwardedRef, forwardRef } from 'react'
import { InputProps } from './input.props'
import cn from 'classnames'
import styles from './input.module.scss'

const Input = forwardRef(
  (
    { className, error, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <div className={styles.wrapper}>
        <input
          ref={ref}
          className={cn(className, styles.input, {
            [styles.error]: error,
          })}
          {...props}
        />
        {error && <span>{error.message}</span>}
      </div>
    )
  }
)

export default Input
