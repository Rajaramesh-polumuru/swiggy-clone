import { styled } from "styled-components";

export const LeftNavWrapper = styled.div`
  max-width: 350px;
  min-width: 250px;
  height: auto;
  padding: 20px;
`;

export const HeadingWrapper = styled.div`
  font-weight: bold;
  font-family: var(--roboto-slab);
  font-size: 20px;
`;
export const ContentWrapper = styled.div`
  font-size: 14px;
  color: var(--light-font-color);
`;
export const FilterSubHeadingWrapper = styled.div`
  font-family: var(--roboto-slab);
  font-size: 16px;
  font-weight: bold;
`;
export const FilterWrapper = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 400;
  color: var(--light-font-color);
`;
export const FiltersContainer = styled.div`
  display: grid;
  gap: 16px;
`;
export const FilterContainer = styled.div`
  display: grid;
  gap: 8px;
`;
export const FiltersHeaderWrapper = styled.div`
  margin: 16px 0;
`;
