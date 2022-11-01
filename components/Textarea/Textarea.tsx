import React, { ForwardedRef } from 'react'
import { TextareaProps } from './textarea.props'
import cn from 'classnames'
import styles from './textarea.module.scss'

const Textarea = React.forwardRef(
  (
    { placeholder, className, error, ...props }: TextareaProps,
    ref: ForwardedRef<HTMLTextAreaElement>
  ): JSX.Element => {
    return (
      <div
        className={cn(styles.wrapper, className, {
          [styles.error]: error,
        })}
      >
        <textarea
          ref={ref}
          placeholder={placeholder}
          className={cn(styles.input)}
          {...props}
        />
        <span>{error && error.message}</span>
      </div>
    )
  }
)

export default Textarea
