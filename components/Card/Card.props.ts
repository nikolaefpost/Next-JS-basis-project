import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface CardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  cardColor: 'white' | 'blue'
}
