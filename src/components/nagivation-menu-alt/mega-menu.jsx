import MenuItem from "./menu-item"

const MegaMenu = ({ menuData, handleToggle, clicked, setIsDrawerOpen }) => {
  return (
    <div className="nav__container">
      <nav>
        <ul>
          {menuData &&
            menuData.map(({ title, columns }, index) => {
              return (
                <MenuItem
                  key={index}
                  {...{ title, columns }}
                  onToggle={() => handleToggle && handleToggle(index)}
                  active={clicked === index}
                  setIsDrawerOpen={setIsDrawerOpen}
                />
              )
            })}
        </ul>
      </nav>
    </div>
  )
}

export default MegaMenu
