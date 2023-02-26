import styled from "styled-components";


export const CardImage = styled.span`
  width: 100%;
  height: 320px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 10px;
`

export const ProductCardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    border-radius: 10px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
      transform: translateZ(0);
      transform: scale(1.05);
      transition: transform 0.5s ease-out;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
`;

export const Name = styled.span`
  width: 85%;
  margin-bottom: 15px;
  margin-left: 5px;
`;
export const Price = styled.span`
  width: 15%;
  margin-right: 5px;
`;
