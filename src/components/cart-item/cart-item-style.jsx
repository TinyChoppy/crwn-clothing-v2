import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
`;
export const CartItemImg = styled.img`
  width: 30%;
  border-radius: 5px;
`;
export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px 10px 10px;
`;
export const CartItemName = styled.h2`
  font-size: 16px;
  color: black;
`;

export const Price = styled.span`
  color: black;
`