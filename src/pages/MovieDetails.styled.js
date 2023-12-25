import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: 1200px;
`
export const LinkStyled = styled(Link)`
    display: block;
    margin: 40px 0 10px;
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-shadow: #557396 2px 0px 3px, 
        #557396 0px 2px 3px, 
        #557396 -2px 0px 3px, 
        #557396 0px -2px 3px;
`
export const Info = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    margin-bottom: 10px;
`
export const Description = styled.div`
    background-color: white;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 5px 10px;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12), 0 2px 16px 0 rgba(14,30,37,.32);
`
export const Score = styled.p`
    font-size: 18px;
`
export const DescrInform = styled.h3`
    display: flex;
    flex-direction: column;
    font-weight: 400;
`
export const SpanStyled = styled.span`
    font-weight: 700;
    text-transform: capitalize;
`
export const Additional = styled.p`
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    color: white;
    text-shadow: #557396 2px 0px 3px, 
        #557396 0px 2px 3px, 
        #557396 -2px 0px 3px, 
        #557396 0px -2px 3px;
    margin-bottom: 10px;
`
export const LinksList = styled.ul`
    display: flex;
    gap: 24px;
    justify-content: center;
    margin-bottom: 10px;
`
export const NavLinkStyled = styled(NavLink)`
    display: block;
    font-size: 24px;
    font-weight: 700;
    color: white;
    text-shadow: #B8869B 2px 0px 3px, 
        #B8869B 0px 2px 3px, 
        #B8869B -2px 0px 3px, 
        #B8869B 0px -2px 3px;
    transition-duration: .3s;
    transition-timing-function: linear;

    &.active {
        transform: scale(1.2);
    }
`