import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
  width: auto;
  background-color: #060606;
  color: #e4e4e4;
  display: flex;
  justify-content: end;
  padding: 16px 24px;
  height: fit-content;
`;
export const RightMenuWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const MenuItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 16px;
  &:hover {
    border-radius: 8px;
    background-color: var(--light-font-color);
  }
`;

export const MenuItemText = styled.div``;
