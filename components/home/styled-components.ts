import { styled } from "styled-components";

export const RestaurantCardWrapper = styled.div`
  padding: 20px 20px 57px;
  border: 1px solid #fff;
  contain: content;
  width: 298px;
  height: fit-content;
  cursor: pointer;

  &:hover {
    border-color: #d3d5df;
    box-shadow: 0 4px 7px 0 rgba(218, 220, 230, 0.6);
  }
`;

export const NameWrapper = styled.div`
  font-family: var(--roboto-slab);
  font-weight: bold;
  font-size: 16px;
`;

export const RestaurantListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px;
  justify-content: space-around;
`;

export const AverageRatingWrapper = styled.div`
  display: flex;
  gap: 4px;
  padding: 5px;
  font-weight: 400;
  background-color: #48c479;
  color: #fff;
  font-size: 12px;
  align-items: center;
  border-radius: 4px;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  justify-content: space-between;
  align-items: center;
`;

export const CuisinesWrapper = styled.p`
  color: var(--light-font-color);
  word-break: break-all;
  word-wrap: break-word;
  -webkit-hyphens: auto;
  -moz-hyphens: auto;
  hyphens: auto;
`;

export const DeliveryTimeWrapper = styled.div`
  font-size: 12px;
  color: var(--light-font-color);
`;

export const CostForTwoWrapper = styled.div`
  font-size: 12px;
  color: var(--light-font-color);
`;

export const SeparatorWrapper = styled.div`
  font-weight: normal;
  font-size: x-small;
  color: var(--light-font-color);
`;
export const NoResDataWrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  color: var(--light-font-color);
`;
