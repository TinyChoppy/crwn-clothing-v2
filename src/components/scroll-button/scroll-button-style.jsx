import styled from "styled-components";
import { ReactComponent as UpSvg } from "../../assets/upArrow.svg";

export const ScrollButtonContainer = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #5D3891;
  position: fixed;
  bottom: 40px;
  font-size: 3rem;
  z-index: 1;
  right: 40px;
  cursor: pointer;
`;
export const UpBtn = styled(UpSvg)`
  width: 16px;
  height: 16px;
  margin: 0 12px 20px;
  color: white;
`;
