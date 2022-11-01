import { ProductModel, TopLevelCategory, TopPageModel } from '../../interface'

export interface TopPageComponentProps {
  page: TopPageModel
  products: ProductModel[]
  firstCategory: TopLevelCategory
}
