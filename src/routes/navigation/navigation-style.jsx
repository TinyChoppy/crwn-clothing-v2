import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as HeartSvg } from "../../assets/heart.svg";

export const NavigationContainer = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 0 10px;
  position: relative;
  /* background-color: #4E31AA */
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 50px;
  border-radius: 25px;
  background-color: orange;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  color: grey;
`;

export const HeartLogo = styled(HeartSvg)`
  height: 50px;
  width: 50px;
  padding: 5px;
  fill: black;
`;
