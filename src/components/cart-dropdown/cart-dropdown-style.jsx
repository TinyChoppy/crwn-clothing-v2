import styled from "styled-components";
import {
  BaseButton,
  GoogleSignInButton,
  FacebookSignInButton,
  InvertedButton,
} from "../button/button-style";

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 330px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: white;
  top: 60px;
  right: 0;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${FacebookSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 20px;
  margin: 50px auto;
  color: black;
`;

export const CartItems = styled.div`
  height: 230px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(85, 85, 85, 0.5);
    border-radius: 20px;
    border: transparent;
  }
`;
