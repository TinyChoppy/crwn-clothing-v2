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
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  border-radius: 20px;
  background-color: white;
  top: 60px;
  right: 7px;
  z-index: 5;

  ${BaseButton},
  ${GoogleSignInButton},
  ${FacebookSignInButton},
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
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
