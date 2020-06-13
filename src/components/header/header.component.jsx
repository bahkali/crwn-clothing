import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.action";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <div>
      <HeaderContainer>
        <LogoContainer to="/">
          <Logo className="logo " />
        </LogoContainer>
        <OptionsContainer>
          <OptionLink to="/shop">SHOP</OptionLink>
          <OptionLink to="/shop">CONTACT</OptionLink>
          {currentUser ? (
            <OptionLink as="div" onClick={signOutStart}>
              SIGN OUT
            </OptionLink>
          ) : (
            <OptionLink to="/signin"> SIGN IN</OptionLink>
          )}
          <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
      </HeaderContainer>
    </div>
  );
};

const mapStateProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateProps, mapDispatchToProps)(Header);
