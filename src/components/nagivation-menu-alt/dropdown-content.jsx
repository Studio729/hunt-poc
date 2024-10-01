import React from "react"
import { Link } from "react-router-dom"
import LinkButton from "../linkbutton/linkbutton"

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

const SubMenuColumn = ({ column }) => {
  return (
    <div
      key={column.id}
      className="dropdown-panel-column"
      style={{ backgroundColor: column.backgroundColor ? column.backgroundColor : "inherit" }}
    >
      <div className="column-title">{column?.title}</div>
      <div className="flex flex-col">
        {column?.menuItems &&
          column.menuItems
            .map((menuItem) => (
              <SubMenuItem key={menuItem.id} menuItem={menuItem} />
            ))}
      </div>
      {column.footerLink && (
        <LinkButton
          Text={column.footerLink.linkText}
          Color="Primary"
          showArrow={true}
          href={column.footerLink.href}
        />
      )}
    </div>
  )
}

const DropdownContent = ({ submenuscontent, setIsDrawerOpen, handleClick }) => {
  return (
    <div className="dropdown_content">
      {submenuscontent.map((column, index) => (
        <SubMenuColumn column={column} />
        // <React.Fragment key={index}>
        //   <section>
        //     <h4>{column.title}</h4>
        //     <ul>
        //       {column.menuItems.map(({ title, href }, index) => (
        //         <li
        //           key={index}
        //           onClick={() => {
        //             setIsDrawerOpen && setIsDrawerOpen(false)
        //             handleClick()
        //           }}
        //         >
        //           <Link to={href}>{title}</Link>
        //         </li>
        //       ))}
        //     </ul>
        //   </section>
        // </React.Fragment>
      ))}
    </div>
  )
}

export default DropdownContent
