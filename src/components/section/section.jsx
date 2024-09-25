import { useMemo } from "react"
import styles from "./styles.module.css"
import clsx from "clsx"

const Section = ({ Size, children }) => {
  const size = useMemo(() => {
    let _size = (0 + Size) * 0.25
    return `${_size}rem`
  }, [Size])

  return <section className={clsx(styles.section)} style={{paddingTop: size, paddingBottom: size}} >{children}</section>
}

export default Section
