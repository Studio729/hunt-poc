import { BuilderContent, builder } from "@builder.io/react"
import { Link } from "react-router-dom"
import Container from "./container"
import UserProfile from "./user-profile"
import { AlignJustify } from "lucide-react"
import "./styles.css"
import MobileNavigationDrawer from "./mobile-navigation-drawer"
import { useEffect, useRef, useState } from "react"
import MegaMenu from "./mega-menu"

const Navigation = () => {
  const [menuData, setMenuData] = useState(null)
  useEffect(() => {
    builder
      .getAll("navigation-menu", {
        // Include references, like our `author` ref
        options: { includeRefs: true, enrich: true },
      })
      .then((response) =>
        setMenuData(
          response.map((item) => {
            return {
              id: item.id,
              title: item.data.title,
              columns: item.data.columns
                ? item.data.columns
                    .filter((item) => !!item?.column)
                    .map((item) => {
                      return {
                        id: item.column.id,
                        title: item.column.value?.data?.title,
                        backgroundColor: item.column.value?.data?.backgroundColor,
                        menuItems: item.column.value?.data?.menuItems
                          ? item.column.value?.data?.menuItems
                              .filter((item) => !!item?.menuItem)
                              .map((item) => {
                                return {
                                  id: item.menuItem.id,
                                  title: item.menuItem?.value?.data?.title,
                                  href: item.menuItem?.value?.data?.href,
                                  icon: item.menuItem?.value?.data?.icon,
                                  image: item.menuItem?.value?.data?.image,
                                  subtext: item.menuItem?.value?.data?.subtext,
                                }
                              })
                          : undefined,
                        footerLink: item.column.value?.data?.footerLink
                          ? {
                              id: item.column.value.data.footerLink.id,
                              href: item.column.value.data.footerLink.value.data.href,
                              linkText: item.column.value.data.footerLink.value.data.linkText,
                            }
                          : undefined,
                      }
                    })
                : undefined,
            }
          }),
        ),
      )
  }, [])

  useEffect(() => {
    console.log("menuData", menuData)
  }, [menuData])

  const drawerButtonRef = useRef(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      {menuData && (
        <header className="nav__header">
          <Container>
            <div className="toolbar">
              <Link className="logo__link" to={"/"}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3eb6f92aedf74f109c7b4b0897ec39a8%2F4283ddf88252447a94aa903aebc838de"
                  className="max-h-[50px]"
                  alt="Huntress"
                />
              </Link>
              <div className="hidden md:block">
                <MegaMenu menuData={menuData} />
              </div>
              {/* <UserProfile /> */}
              <button
                className="menu_icon md:hidden"
                aria-haspopup="true"
                onClick={() => setIsDrawerOpen(true)}
                ref={drawerButtonRef}
              >
                {/* Mobile Hamburger menu */}
                <AlignJustify />
              </button>
              <MobileNavigationDrawer menuData={menuData}
                {...{ isDrawerOpen, setIsDrawerOpen }}
                drawerButtonRef={drawerButtonRef}
              />
            </div>
          </Container>
        </header>
      )}
    </>
  )
}

export default Navigation
