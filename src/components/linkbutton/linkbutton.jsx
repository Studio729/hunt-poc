import styles from "./styles.module.css"
import clsx from "clsx"
import { useMemo } from "react"

const LinkButton = ({ Text: text, Color: color, href, showArrow, props }) => {
  const linkbuttonColor = useMemo(() => {
    let _color = [styles.button]
    switch (color) {
      case "Primary":
        _color.push(styles.buttonBrandGreen)
        break

      case "Secondary":
        _color.push(styles.buttonBrandBlue)
        break
      case "Huntress Blue":
        _color.push(styles.buttonBrandHuntressBlue)
        break

      default:
        break
    }
    return _color
  }, [color])

  return (
    <a className={clsx(styles.linkbutton, linkbuttonColor)} href={href} {...props}>
      <div className="flex gap-2 items-center">{text} {showArrow && <img src="https://cdn.builder.io/api/v1/image/assets%2F3eb6f92aedf74f109c7b4b0897ec39a8%2F40424c3087364a0480498ff6229bbd41" />}</div>
    </a>
  )
}

export default LinkButton
