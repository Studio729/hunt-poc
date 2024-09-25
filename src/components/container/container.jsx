import { useMemo } from "react"
import styles from "./styles.module.css"
import clsx from "clsx"

const Container = ({ Size: size, children }) => {
  const containerSize = useMemo(() => {
    let _size = "4"
    switch (size) {
      case "Small":
        _size = styles.containerInner_sm
        break

      case "Medium":
        _size = styles.containerInner_md
        break

      case "Large":
        _size = styles.containerInner_lg
        break

      case "X Large":
        _size = styles.containerInner_xl
        break

      case "2X Large":
        _size = styles.containerInner_2xl
        break

      default:
        _size = styles.containerInner_lg
        break
    }

    return _size
  }, [size])

  return (
    <div className={styles.container}>
      <div className={clsx(styles.containerInner, containerSize)}>{children}</div>
    </div>
  )
}

export default Container
