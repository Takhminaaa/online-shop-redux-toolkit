import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { openCart } from "../store/productSlice";

export default function Header() {
  const dispatch = useDispatch();

  const openCartHandler = () => {
    dispatch(openCart());
  };
  return (
    <StyledHeader>
      <h1>Online 🛒 Shop</h1>
      <button onClick={openCartHandler}>Cart🛒</button>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 80px;
  padding: 5px 40px;
  background-color: lime;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  & > button {
    width: 300px;
    height: 45px;
    background-color: #45d8a2;
    border: none;
    font-size: 18px;
    border-radius: 7px;
    border: 2px solid blue;
    &:hover {
      background-color: coral;
    }
  }
`;
