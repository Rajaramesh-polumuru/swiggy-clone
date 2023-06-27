import Image from "next/image";
import { FC } from "react";
import { styled } from "styled-components";

const SearchInput = styled.input`
  border: none;
  border-radius: 0%;
  border: 1px solid var(--border-color);
  padding: 8px 16px;
  height: 40px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 400px;
  &:focus-visible {
    outline: var(--border-color) auto 1px;
  }
`;
const SearchBarWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SearchButtonWrapper = styled.button`
  border: none;
  background: var(--primary-color);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  &:active {
    scale: 0.98;
  }
`;
const SearchBar: FC<any> = () => {
  return (
    <SearchBarWrapper>
      <SearchInput type="text" placeholder="Search Restaurants..." />
      <SearchButtonWrapper>
        <Image src={"/search-icon.svg"} height={24} width={24} alt="Search" />
      </SearchButtonWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
