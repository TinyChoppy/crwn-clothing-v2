import styled from "styled-components";
import { ReactComponent as SunSvg } from "../../assets/sun.svg";
import { ReactComponent as MoonSvg } from "../../assets/moon.svg";



export const Sun = styled(SunSvg)`
  width: 20px;
  height: 20px;
  margin: 2px 2px;
  background-color: #F99417;
  border-radius: 10px;
  transition: transform 2s ease-in;
  transform: translateX(24px);
`;

export const Moon = styled(MoonSvg)`
  width: 20px;
  height: 20px;
  margin: 2px 2px;
  border-radius: 10px;
  background-color: #5D3891;
`;  

export const ToggleButtonContainer = styled.div`
  width: 48px;
  height: 24px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 15px;
  background-color: grey;
  cursor: pointer;
  position: relative;
  :hover ${Sun} {
    box-shadow: 0 0 4px 4px rgba(244, 233, 155, 0.4);
  }
  :hover ${Moon} {
    box-shadow: 0 0 4px 4px rgba(246,238,213, 0.4);
  }
`;