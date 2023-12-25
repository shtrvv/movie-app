import styled from "styled-components";

export const Form = styled.form`
    margin: 40px 0;
    display: flex;
    justify-content: center;
    gap: 10px;
`
export const Input = styled.input`
    font-size: 18px;
    border-radius: 5px;
    border: 3px solid #557396;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12), 0 2px 16px 0 rgba(14,30,37,.32);
`
export const Btn = styled.button`
    cursor: pointer;
    font-size: 18px;
    font-weight: 700;
    border-radius: 7px;
    border: none;
    padding: 5px;
    background-color: #557396;
    color: white;
    box-shadow: 0 2px 4px 0 rgba(14,30,37,.12), 0 2px 16px 0 rgba(14,30,37,.32);
    transition-duration: 0.3s;
    transition-timing-function: linear;

    &:is(:hover) {
        transform: scale(1.15);
        background-color: #4E6887;
    }
`