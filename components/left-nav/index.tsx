import Checkbox from "@/components/checkbox";
import {
  ContentWrapper,
  FilterContainer,
  FilterSubHeadingWrapper,
  FilterWrapper,
  FiltersContainer,
  FiltersHeaderWrapper,
  HeadingWrapper,
  LeftNavWrapper,
} from "@/components/left-nav/styled-components";
import { FC } from "react";

const LeftNavigation: FC<any> = ({
  filters,
  onFilterChange,
  filtersList,
}: {
  filters: { [key: string]: string[] };
  onFilterChange: (key: string, item: string, value: boolean) => void;
  filtersList: string[];
}) => {
  return (
    <LeftNavWrapper>
      <FiltersHeaderWrapper>
        <HeadingWrapper>Filter Restaurants</HeadingWrapper>
        <ContentWrapper>
          Check multiple boxes below to narrow down restaurant search results
        </ContentWrapper>
      </FiltersHeaderWrapper>
      <FiltersContainer>
        {Object.keys(filters).map((key) => {
          return (
            <FilterContainer key={key}>
              <FilterSubHeadingWrapper>{`By ${key}`}</FilterSubHeadingWrapper>
              {filters[key]?.map((item: string) => {
                return (
                  <FilterWrapper key={item}>
                    <Checkbox
                      checked={filtersList?.includes(item)}
                      onChange={(value) => onFilterChange(key, item, value)}
                    />
                    <label>{item}</label>
                  </FilterWrapper>
                );
              })}
            </FilterContainer>
          );
        })}
      </FiltersContainer>
    </LeftNavWrapper>
  );
};

export default LeftNavigation;
