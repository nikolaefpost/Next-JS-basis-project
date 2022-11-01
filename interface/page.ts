export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface Qa {
  question: string
  answer: string
}

export interface TopPageAdvantage {
  title: string
  description: string
  _id: string
}

export interface HhData {
  count: number
  juniorSalary: number
  middleSalary: number
  seniorSalary: number
  updatedAt: Date
  _id: string
}

export interface Blog {
  h1: string
  metaTitle: string
  metaDescription: string
  views: number
  _id: string
}

export interface Sravnikus {
  metaTitle: string
  metaDescription: string
  qas: Qa[]
  _id: string
}

export interface Learningclub {
  metaTitle: string
  metaDescription: string
  qas: Qa[]
  _id: string
}

export interface TopPageModel {
  _id: string
  tags: string[]
  secondCategory: string
  alias: string
  title: string
  category: string
  seoText: string
  tagsTitle: string
  metaTitle: string
  metaDescription: string
  firstCategory: TopLevelCategory
  advantages: TopPageAdvantage[]
  createdAt: Date
  updatedAt: Date
  __v: number
  hh: HhData
  qas: Qa[]
  categoryOn: string
  blog: Blog
  sravnikus: Sravnikus
  learningclub: Learningclub
}
