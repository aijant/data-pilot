import React from 'react'
import line1 from '../../assets/images/line-1.svg'
import line2 from '../../assets/images/line-2.svg'
import line3 from '../../assets/images/line-3.svg'
import line4 from '../../assets/images/line-4.svg'
import styles from './styles.module.scss'

export const Lines = () => {
  return (
    <>
      <img className={styles.line1} src={line1} alt='' />
      <img className={styles.line2} src={line2} alt='' />
      <img className={styles.line3} src={line3} alt='' />
      <img className={styles.line4} src={line4} alt='' />
      <img className={styles.line5} src={line4} alt='' />
    </>
  )
}
