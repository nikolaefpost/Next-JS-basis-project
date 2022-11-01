import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import upIcon from './upArrow.svg'
import menuIcon from './menuIcon.svg'
import crossIcon from './crossIcon.svg'

export const icons = {
  upIcon,
  menuIcon,
  crossIcon,
}

export type IconName = keyof typeof icons

export interface ButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  appearance: 'primary' | 'white'
  icon: IconName
}
