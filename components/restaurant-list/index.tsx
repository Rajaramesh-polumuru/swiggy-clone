import { RestaurantData } from "@/app/types";
import {
  RestaurantListWrapper,
  RestaurantCardWrapper,
  NameWrapper,
  CuisinesWrapper,
  DetailsWrapper,
  AverageRatingWrapper,
  SeparatorWrapper,
  DeliveryTimeWrapper,
  CostForTwoWrapper,
} from "@/components/home/styled-components";
import Image from "next/image";
import { FC } from "react";

export interface RestaurantsListComponentProps {
  searchQuery: string;
  searchFilteredData: RestaurantData[];
  filteredData: RestaurantData[];
}

const RestaurantsListComponent: FC<RestaurantsListComponentProps> = ({
  searchQuery,
  searchFilteredData,
  filteredData,
}) => {
  return (
    <RestaurantListWrapper>
      {(searchQuery ? searchFilteredData : filteredData)?.map((item) => {
        return (
          <RestaurantCardWrapper key={item.uuid}>
            <Image
              src={item.imageSrc}
              width={256}
              height={160}
              alt={item.name}
            />
            <NameWrapper>{item.name}</NameWrapper>
            <CuisinesWrapper>{item.cuisines?.join(", ")}</CuisinesWrapper>
            <DetailsWrapper>
              <AverageRatingWrapper>
                <Image
                  width={12}
                  height={12}
                  src={"/star.svg"}
                  alt="star-icon"
                />
                {item.avgRating}
              </AverageRatingWrapper>
              <SeparatorWrapper>•</SeparatorWrapper>
              <DeliveryTimeWrapper>{`${item.deliveryTime}min`}</DeliveryTimeWrapper>
              <SeparatorWrapper>•</SeparatorWrapper>
              <CostForTwoWrapper>
                {item.costForTwoString.toLowerCase()}
              </CostForTwoWrapper>
            </DetailsWrapper>
          </RestaurantCardWrapper>
        );
      })}
    </RestaurantListWrapper>
  );
};
export default RestaurantsListComponent;
