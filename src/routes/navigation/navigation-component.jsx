import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useDispatch } from "react-redux";

import CartIcon from "../../components/cart-icon/cart-icon-component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown-component";
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
  HeartLogo,
} from "./navigation-style";
import DarkMode from "../../components/dark-theme/dark-theme-component";
// import SearchBar from "../../components/search-bar/search-bar-component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={"/"}>
          <HeartLogo />
        </LogoContainer>
        {/* < SearchBar /> */}
        <NavLinks>
          <DarkMode />
          <NavLink to={"/shop"}>SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={() => dispatch(signOutStart())}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to={"/auth"}>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
