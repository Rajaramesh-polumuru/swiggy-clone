"use client";
import { restaurantData } from "@/lib/dummy-data";
import { RestaurantData } from "@/app/types";
import { useMemo, useState, useCallback } from "react";
import Header from "@/components/header";
import {
  BodyWrapper,
  LayoutWrapper,
} from "@/components/layout/styled-components";
import LeftNavigation from "@/components/left-nav";
import TopMenu from "@/components/top-menu";
import useSearchData from "@/hooks/useSearchData";
import { NoResDataWrapper } from "@/components/home/styled-components";
import { applyFilters } from "@/utils/filter-data";
import RestaurantsListComponent from "@/components/restaurant-list";
import { mapRestaurantData } from "@/utils/restaurant-mapper";

export default function RestaurantList() {
  const formattedData: RestaurantData[] = useMemo(
    () => restaurantData?.map(mapRestaurantData),
    []
  );
  const [filteredData, setFilteredData] =
    useState<RestaurantData[]>(formattedData);
  const [searchFilteredData, handleSearchQueryChange] =
    useSearchData(formattedData);
  const [searchQuery, setSearchQuery] = useState("");
  const cuisinesArray = useMemo(
    () =>
      Array.from(new Set(formattedData?.map((item) => item.cuisines).flat())),
    [formattedData]
  );
  const [filtersList, setFiltersList] = useState<{ [key: string]: string[] }>(
    {}
  );

  const filters = useMemo(
    () => ({
      Vegetarian: ["Veg"],
      "Average Rating": [">=4", ">3"],
      "Delivery Time": ["<30min", "30 to 60min", ">60min"],
      Cuisines: cuisinesArray,
    }),
    [cuisinesArray]
  );

  const onFilterChange = useCallback(
    (key: string, item: string, value: boolean) => {
      setFilteredData((prevData) => {
        const tempFilters = { ...filtersList };

        if (value) {
          tempFilters[key] = [...(tempFilters[key] ?? []), item];
        } else {
          if (tempFilters[key] !== null && tempFilters[key]?.includes(item)) {
            tempFilters[key] = tempFilters[key].filter(
              (filterItem: string) => filterItem !== item
            );
          }
        }

        setFiltersList(tempFilters);
        return applyFilters(formattedData, tempFilters);
      });
    },
    [formattedData, filtersList]
  );

  return (
    <LayoutWrapper>
      <Header />
      <TopMenu
        handleSearchQueryChange={(e: any) => {
          setSearchQuery(e.target.value);
          handleSearchQueryChange(e.target.value);
        }}
      />
      <BodyWrapper>
        <LeftNavigation filters={filters} onFilterChange={onFilterChange} />
        {(searchQuery ? searchFilteredData : filteredData)?.length ? (
          <RestaurantsListComponent
            searchQuery={searchQuery}
            searchFilteredData={searchFilteredData}
            filteredData={filteredData}
          />
        ) : (
          <NoResDataWrapper>No Restaurant Data</NoResDataWrapper>
        )}
      </BodyWrapper>
    </LayoutWrapper>
  );
}
