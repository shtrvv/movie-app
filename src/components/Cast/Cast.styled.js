import styled from "styled-components";

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 48px 24px;
    margin-bottom: 40px;
`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(20% - 19.5px);
    background-color: white;
    border-radius: 7px;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12), 0 2px 16px 0 rgba(14,30,37,.32);
`
export const Name = styled.h4`
    font-size: 18px;
    margin-top: 5px;
`
export const Charachter = styled.p`
    font-size: 18px;
    text-align: center;
    margin-bottom: 5px;
`
export const SpanStyled = styled.span`
    font-weight: 700;
`