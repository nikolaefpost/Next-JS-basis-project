import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { ProductModel } from '../../interface'

export interface ProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel
}
