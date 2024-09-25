import clsx from "clsx"
import "./styles.css"
import { Button } from "./button/button"

const NavigationMenu = () => {

  return (
    <div className="flex flex-col gap-4">
        <div className="flex justify-end">
            <div className="flex items-center gap-6">
            <a href="/">Partner Login</a>
            <Button variant="ghost" className="gap-2">Search <img src="https://cdn.builder.io/api/v1/image/assets%2F3eb6f92aedf74f109c7b4b0897ec39a8%2F7b252fe1c31f4a17afedbd2ee077f5fe" /></Button>
            </div>
        </div>
      <nav className="flex justify-between items-center">
        <a href="/"><img src="https://cdn.builder.io/api/v1/image/assets%2F3eb6f92aedf74f109c7b4b0897ec39a8%2F4283ddf88252447a94aa903aebc838de" className="max-h-[50px]" alt="Huntress" /></a>
        <div className="flex items-center gap-4">
        <ul className="mainmenu">
          <li className="menuitem">
            <a href="#">Platform</a>
          </li>
          <li className="dropdown menuitem">
            <a href="#">Why Huntress</a>
            <div className="dropdown-content">
            <p>Hello World</p>
          </div>
          </li>
          <li className="menuitem">
            <a href="#">Resources</a>
          </li>
          <li className="menuitem">
            <a href="#.asp">About</a>
          </li>
        </ul>
        <Button>Free Trial</Button>
        </div>
      </nav>
    </div>
  )
}

export default NavigationMenu
