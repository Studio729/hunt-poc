import { useEffect } from "react"
import { Button } from "./button"

const ButtonTemplate = ({ Text: text, Size: size, Variant: variant, Width: width }) => {

  return (
    <Button variant={variant} size={size} width={width}>
      {text}
    </Button>
  )
}

export default ButtonTemplate
