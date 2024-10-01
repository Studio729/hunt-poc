import { BuilderContent, builder } from "@builder.io/react"
import { useEffect, useState } from "react"
import clsx from "clsx"
import "./styles.css"
import { Button } from "../button/button"
import LinkButton from "../linkbutton/linkbutton"

builder.init("3eb6f92aedf74f109c7b4b0897ec39a8")

const Navigation = () => {
  const [menu, setMenu] = useState(null)
  useEffect(() => {
    builder
      .getAll("navigation-menu", {
        // Include references, like our `author` ref
        options: { includeRefs: true, enrich: true },
      })
      .then((data) => setMenu(data))
  }, [])

  useEffect(() => {
    console.log("menu", menu)
  }, [menu])

  const SubMenuColumn = ({ column }) => {
    return (
      <div key={column.id} className="dropdown-panel-column" style={{ backgroundColor: column.backgroundColor ? column.backgroundColor : "inherit" }}>
        <div className="column-title">{column?.title}</div>
        <div className="flex flex-col">
          {column?.menuItems && column.menuItems.filter((item) => item?.menuItem && item.menuItem.value?.data?.title).map((item) => <SubMenuItem key={item.menuItem.id} menuItem={item.menuItem.value.data} />)}
        </div>
        {column.footerLink && <LinkButton Text={column.footerLink.value.data.linkText} Color="Primary" showArrow={true} href={column.footerLink.value.data.href} />}
      </div>
    )
  }

  const SubMenuItem = ({ menuItem }) => {
    // console.log("menuItem", menuItem)

    const _subMenuItem = (
      <div className={`flex flex-col gap-3 ${menuItem?.icon ? "mb-3" : ""}`}>
        {menuItem.image && (
          <div className="flex justify-center items-center">
            <img src={menuItem.image} />
          </div>
        )}
        <div className="flex space-x-3 items-center">
          {menuItem?.icon && (
            <div className="submenu-cell">
              <img src={menuItem?.icon} />
            </div>
          )}
          <div className="submenu-title">{menuItem.title}</div>
        </div>
        {menuItem?.subtext && (
          <div className="flex space-x-3">
            {menuItem?.icon && <div className="submenu-cell"></div>}
            <div className="submenu-subtext">{menuItem.subtext}</div>
          </div>
        )}
      </div>
    )

    if (menuItem.href) {
      return (
        <a key={menuItem.id} className="submenu-item brighten w-full" href={menuItem.href}>
          {_subMenuItem}
        </a>
      )
    } else {
      return _subMenuItem
    }
  }

  const NavigationBar = ({ children, ...props }) => <nav {...props}>{children}</nav>

  const NavigationBrand = ({ href, image }) => <a href={href ?? "/"}>{image}</a>

  const NavigationMenu = ({ menuItems }) => (
    <div className="navigation-bar-submenu">
      <ul className="navigation-menu">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id} className="menuitem">
            <div className="title">{menuItem.title}</div>
            {menuItem?.columns && (
              <div className="dropdown-panel">
                {menuItem.columns
                  .filter((item) => item.column?.value?.data)
                  .map((item) => (
                    <SubMenuColumn column={item.column.value.data} />
                  ))}
              </div>
            )}
          </li>
        ))}
      </ul>
      {/* {menuItems.map((menuItem) => (
        <>
          {menuItem?.columns && (
            <div className="dropdown-panel">
              {menuItem.columns.map((item) => (
                <SubMenuColumn column={item.column.value.data} />
              ))}
            </div>
          )}
        </>
      ))} */}
      <Button>Free Trial</Button>
    </div>
  )

  return (
    <>
      {menu && (
        <div className="flex flex-col gap-2 navigation-bar">
          <div className="flex justify-end">
            <div className="flex items-center gap-6">
              <a href="/">Partner Login</a>
              <Button variant="ghost" className="gap-2">
                Search <img src="https://cdn.builder.io/api/v1/image/assets%2F3eb6f92aedf74f109c7b4b0897ec39a8%2F7b252fe1c31f4a17afedbd2ee077f5fe" />
              </Button>
            </div>
          </div>
          <NavigationBar className="navigation-bar-menu">
            <NavigationBrand
              href="/"
              image={<img src="https://cdn.builder.io/api/v1/image/assets%2F3eb6f92aedf74f109c7b4b0897ec39a8%2F4283ddf88252447a94aa903aebc838de" className="max-h-[50px]" alt="Huntress" />}
            />
            <NavigationMenu menuItems={menu && menu.map((item) => item.data)} />
          </NavigationBar>
        </div>
      )}
    </>
  )
}

export default Navigation
