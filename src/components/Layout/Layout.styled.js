import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
    background-color: #6588B2;
    box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 
        0 4px 5px 0 rgba(0,0,0,.14), 
        0 1px 10px 0 rgba(0,0,0,.12);
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 64px;
    padding: 12px 24px;
    position: sticky;
    z-index: 1100;
    top: 0;
`
export const NavList = styled.ul`
    display: flex;
    gap: 24px;
`
export const NavLinkStyled = styled(NavLink)`
    display: block;
    font-size: 32px;
    font-weight: 700;
    color: #6588B2;
    text-shadow: white 2px 0px 3px, 
        white 0px 2px 3px, 
        white -2px 0px 3px, 
        white 0px -2px 3px;
    transition-duration: .3s;
    transition-timing-function: linear;

    &.active {
        transform: scale(1.2);
    }
`