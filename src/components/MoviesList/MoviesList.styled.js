import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    margin: 0 auto;
    width: 1158px;
`

export const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin: 40px 0;
    color: #B8869B;
    text-shadow: white 2px 0px 3px, 
        white 0px 2px 3px, 
        white -2px 0px 3px, 
        white 0px -2px 3px;
`
export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 48px 24px;
    width: 100%;
    margin-bottom: 40px;
`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-basis: calc(25% - 18px);
    background-color: white;
    border-radius: 7px;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12), 0 2px 16px 0 rgba(14,30,37,.32);
    transition-duration: .3s;
    transition-timing-function: linear;

    &:is(:hover) {
        transform: scale(1.15);
    }
`
export const LinkStyled = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 271px
`
export const Text = styled.p`
    text-align: center;
    padding: 5px 0;
    color: #557396;
    font-size: 18px;
`