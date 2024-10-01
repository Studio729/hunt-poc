import { X } from "lucide-react"
import MegaMenu from "./mega-menu"
import { useEffect, useRef, useState } from "react"

const MobileNavigationDrawer = ({ menuData, isDrawerOpen, setIsDrawerOpen, drawerButtonRef }) => {
  const drawerRef = useRef(null)
  const [clicked, setClicked] = useState(null)

  useEffect(() => {
    if (isDrawerOpen && drawerRef.current) {
      // Focus the drawer when it opens
      drawerRef.current.focus()
    }
  }, [isDrawerOpen])

  const handleToggle = (index) => {
    if (clicked == index) {
      return setClicked(null)
    }
    setClicked(index)
  }

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      setIsDrawerOpen(false)
      // Focus the drawer button when it closes
      if (drawerButtonRef.current) {
        drawerButtonRef.current.focus()
      }
    }
  }
  return (
    <div
      className="mobile_navigation"
      ref={drawerRef}
      tabIndex={isDrawerOpen ? 0 : -1}
      onKeyDown={handleKeyDown}
    >
      {isDrawerOpen && (
        <div
          className="backdrop"
          onClick={() => {
            setIsDrawerOpen(false)
            if (drawerButtonRef.current) {
              drawerButtonRef.current.focus()
            }
          }}
        ></div>
      )}

      <div className={`drawer_content ${isDrawerOpen ? "active" : ""}`}>
        <div className="close_drawer">
          <button onClick={() => setIsDrawerOpen(false)}>
            <X size={30} />
          </button>
        </div>
        <div>
          <MegaMenu
            menuData={menuData}
            handleToggle={handleToggle}
            clicked={clicked}
            setIsDrawerOpen={setIsDrawerOpen}
          />
        </div>
      </div>
    </div>
  )
}

export default MobileNavigationDrawer
