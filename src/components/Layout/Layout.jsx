import { Outlet } from "react-router-dom"

import { Header, NavList, NavLinkStyled } from "./Layout.styled"

const Layout = () => {
  return (
      <>
          <Header>
              <nav>
                  <NavList>
                      <li>
                          <NavLinkStyled to='/' >Home</NavLinkStyled>
                      </li>
                      <li>
                          <NavLinkStyled to='/movies' >Movies</NavLinkStyled>
                      </li>
                  </NavList>
              </nav>
          </Header>
        <Outlet />
    </>
  )
}

export default Layout