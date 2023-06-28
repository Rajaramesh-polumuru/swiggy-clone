import Image from "next/image";
import { styled } from "styled-components";

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  gap: 8px;
`;
const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 4px 24px;
  &:first-child {
    border-right: 2px solid var(--black-color);
  }
`;
const MenuItemTextWrapper = styled.div``;
const UserActionMenu = () => {
  return (
    <MenuWrapper>
      <MenuItemWrapper>
        <Image
          src="/bookmark.png"
          width={24}
          height={24}
          alt="Favorites-icon"
        />
        <MenuItemTextWrapper>Favorite</MenuItemTextWrapper>
      </MenuItemWrapper>
      <MenuItemWrapper>
        <Image
          src="/shopping-cart.png"
          width={24}
          height={24}
          alt="Cart-icon"
        />
        <MenuItemTextWrapper>Cart</MenuItemTextWrapper>
      </MenuItemWrapper>
    </MenuWrapper>
  );
};

export default UserActionMenu;
