import React, { FC, useEffect } from 'react'
import { useAnimationControls, motion } from 'framer-motion'

import styles from './Up.module.scss'
import { useScrollY } from '../../hooks/useScrollY'
import ButtonIcon from '../ButtonIcon/ButtonIcon'

const Up: FC = () => {
  const { scrollY, resetScroll } = useScrollY()
  const controls = useAnimationControls()
  // const { scrollYProgress  } = useScroll();

  useEffect(() => {
    controls.start({ opacity: scrollY / document.body.scrollHeight })
  }, [scrollY, controls])
  return (
    <motion.div
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }}
      // style={{opacity: scrollYProgress}}
    >
      <ButtonIcon
        icon="upIcon"
        appearance="primary"
        onClick={resetScroll}
        aria-label="наверх"
      />
    </motion.div>
  )
}

export default Up
