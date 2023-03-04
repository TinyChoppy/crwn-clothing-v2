import styled from "styled-components";

import { SpinnerContainer } from "../spinner/spinner-style";

export const BaseButton = styled.button`
  min-width: 140px;
  width: auto;
  height: 46px;
  letter-spacing: 0.5px;
  line-height: 46px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #9c42e2;
  color: white;
  text-transform: uppercase;
  font-family: "Source Sans Pro";
  font-weight: bolder;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
  &:hover {
    background-color: white;
    color: #9c42e2;
    border: 1px solid #9c42e2;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #d34836;
  color: white;
  &:hover {
    background-color: white;
    color: #9c42e2;
    border: 1px solid #9c42e2;
  }
`;

export const FacebookSignInButton = styled(BaseButton)`
  background-color: #3b5998;
  color: white;
  &:hover {
    background-color: white;
    color: #9c42e2;
    border: 1px solid #9c42e2;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: #9c42e2;
  border: 1px solid #9c42e2;
  &:hover {
    background-color: #9c42e2;
    color: white;
    border: none;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`