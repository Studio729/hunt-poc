import { useMemo } from "react"

const Heading = ({ Size, Text: text, ...props}) => {
  const size = useMemo(() => {
    let _size = ""
    switch (Size) {
      case "1":
        _size = "12px"
        break
      case "2":
        _size = "14px"
        break
      case "3":
        _size = "16px"
        break
      case "4":
        _size = "18px"
        break
      case "5":
        _size = "20px"
        break
      case "6":
        _size = "24px"
        break
      case "7":
        _size = "28px"
        break
      case "8":
        _size = "35px"
        break
      case "9":
        _size = "60px"
        break

      default:
        _size = "35px"
        break
    }

    return _size
  }, [Size])

  return <h1 style={{ fontSize: size }} {...props}>{text}</h1>
}

export default Heading
