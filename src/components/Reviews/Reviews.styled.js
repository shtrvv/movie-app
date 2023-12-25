import styled from "styled-components";

export const ReviewsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
`
export const Item = styled.li`
    display: flex;
    flex-direction: column;
    gap: 5px;
    background-color: white;
    border-radius: 7px;
    padding: 5px 10px;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12), 0 2px 16px 0 rgba(14,30,37,.32);
`
export const Name = styled.h4`
    font-size: 18px;
`
export const Info = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: white;
    text-align: center;
    text-decoration: underline;
`