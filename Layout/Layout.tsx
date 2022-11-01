import React, {
  FC,
  FunctionComponent,
  useState,
  KeyboardEvent,
  useRef,
} from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import { LayoutProps } from './Layout.props'
import cn from 'classnames'
import styles from './Layout.module.scss'
import { AppContextProvider, IAppContext } from '../context/app.context'
import { Up } from '../components'

const Layout: FC<LayoutProps> = ({ children }) => {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false)
  const bodyRef = useRef<HTMLDivElement>(null)
  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code === 'Enter' || key.code === 'Space') {
      key.preventDefault()
      bodyRef.current?.focus()
    }
    setIsDisplayed(false)
  }

  return (
    <div className={styles.wrapper}>
      <a
        onFocus={() => setIsDisplayed(true)}
        onKeyDown={(key: KeyboardEvent) => skipContentAction(key)}
        tabIndex={1}
        className={cn(styles.skipLink, {
          [styles.displayed]: isDisplayed,
        })}
      >
        Сразу к содержанию
      </a>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div ref={bodyRef} className={styles.body} tabIndex={0}>
        {children}
      </div>
      <Footer className={styles.footer} />
      <Up />
    </div>
  )
}

export default Layout

export const withLayout = <T extends Record<string, unknown> & IAppContext>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    )
  }
}
