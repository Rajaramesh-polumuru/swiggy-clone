import SearchBar from "@/components/search-bar";
import {
  LogoTextWrapper,
  LogoWrapper,
  TopNavWrapper,
} from "@/components/top-menu/styled-components";
import UserActionMenu from "@/components/user-action-menu";
import Image from "next/image";
import { FC } from "react";

const TopMenu: FC<any> = ({ handleSearchQueryChange }) => {
  return (
    <TopNavWrapper>
      <LogoWrapper>
        <Image width={32} height={32} alt="Logo" src={"/logo.png"} />
        <LogoTextWrapper>Restaurants</LogoTextWrapper>
      </LogoWrapper>
      <SearchBar handleSearchQueryChange={handleSearchQueryChange} />
      <UserActionMenu />
    </TopNavWrapper>
  );
};

export default TopMenu;
