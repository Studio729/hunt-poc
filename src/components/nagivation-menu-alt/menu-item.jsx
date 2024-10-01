import { NavLink } from "react-router-dom"
import Container from "./container"
import DropdownContent from "./dropdown-content"
import { ChevronDown, ChevronUp } from "lucide-react"
import { useEffect } from "react"
const MenuItem = ({ title, href, columns, onToggle, active, setIsDrawerOpen }) => {

  const handleClick = () => {
    // Blur the active element to lose focus
    const activeElement = document.activeElement
    activeElement.blur()
  }

  return (
    <li>
      <div className="nav_item_content">
        <NavLink
          to={href && "#"}
          className={({ isActive }) => (isActive ? "active" : "")}
          onClick={() => {
            setIsDrawerOpen && setIsDrawerOpen(false)
            handleClick()
          }}
        >
          {title}
        </NavLink>
        {columns && (
          <button className="md:hidden" onClick={onToggle} aria-label="Toggle dropdown" aria-haspopup="menu" aria-expanded={active ? "true" : "false"}>
            {active ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        )}
      </div>
      {columns && (
        <div className={`dropdown ${active ? "h-auto" : "h-0 overflow-hidden md:h-auto"}`} role="menu">
          <Container>
            <DropdownContent submenuscontent={columns} setIsDrawerOpen={setIsDrawerOpen} handleClick={handleClick} />
          </Container>
        </div>
      )}
    </li>
  )
}

export default MenuItem
