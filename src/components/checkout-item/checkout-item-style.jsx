import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  min-height: 160px;
  max-height: 186px;
  border-radius: 5px;
`;
export const Name = styled.div`
  width: 23%;
`;
export const Quantity = styled.div`
  width: 23%;
  display: flex;
`;
export const Price = styled.div`
  width: 23%;
`;
export const Arrow = styled.span`
  cursor: pointer;
  font-weight: bold;
`;
export const Value = styled.span`
  margin: 0 10px;
`;
export const RemoveButton = styled.span`
  margin: 0 auto;
  cursor: pointer;
`;
