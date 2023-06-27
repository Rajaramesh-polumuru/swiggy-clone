import {
  HeaderWrapper,
  MenuItemWrapper,
  RightMenuWrapper,
} from "@/components/header/styled-components";
import { FC } from "react";

const Header: FC<any> = () => {
  return (
    <HeaderWrapper>
      <RightMenuWrapper>
        <MenuItemWrapper>Register</MenuItemWrapper>
        <MenuItemWrapper>Login</MenuItemWrapper>
      </RightMenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
