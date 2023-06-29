import {
  HeaderWrapper,
  MenuItemText,
  MenuItemWrapper,
  RightMenuWrapper,
} from "@/components/header/styled-components";
import { auth } from "@/firebase/app";
import Image from "next/image";
import { FC } from "react";

const Header: FC<any> = () => {
  const logout = () => {
    auth.signOut();
  };
  return (
    <HeaderWrapper>
      <RightMenuWrapper>
        <MenuItemWrapper onClick={() => logout()}>
          <Image src="/logout.svg" width={24} height={24} alt="logout-icon" />
          <MenuItemText>Logout</MenuItemText>
        </MenuItemWrapper>
      </RightMenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;
