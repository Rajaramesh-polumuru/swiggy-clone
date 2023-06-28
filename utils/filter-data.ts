import { RestaurantData } from "@/app/types";
import { indexOf } from "lodash";
const areAllFiltersEmpty = (obj: { [x: string]: string[] }) => {
  for (const key in obj) {
    if (Array.isArray(obj[key]) && obj[key].length > 0) {
      return false;
    }
  }
  return true;
};
function checkMatchingElements(array1: string[], array2: string[]) {
  for (let i = 0; i < array1.length; i++) {
    if (indexOf(array2, array1[i]) !== -1) {
      return true;
    }
  }

  return false;
}
export function applyFilters(
  data: RestaurantData[],
  filters: { [key: string]: string[] }
) {
  if (areAllFiltersEmpty(filters)) {
    return data;
  }

  console.log({ filters });

  const filteredData = data.filter((entry) => {
    let flag: boolean = true;

    if (
      !!filters["Vegetarian"]?.length &&
      filters["Vegetarian"].includes("Veg")
    ) {
      flag = flag && entry.veg;
    }

    if (!!filters["Cuisines"]?.length) {
      flag =
        flag &&
        checkMatchingElements(entry.cuisines ?? [], filters["Cuisines"]);
    }

    if (!!filters["Delivery Time"]?.length) {
      const deliveryTimeFilters: string[] = filters["Delivery Time"];
      const timeFilterMap: { [key: string]: (time: number) => boolean } = {
        "<30min": (time: number) => time < 30,
        "30 to 60min": (time: number) => time >= 30 && time <= 60,
        ">60min": (time: number) => time > 60,
      };

      flag =
        flag &&
        deliveryTimeFilters.some((filter) =>
          timeFilterMap[filter]?.(entry.deliveryTime)
        );
    }

    if (!!filters["Average Rating"]?.length) {
      const averageRatingFilters: string[] = filters["Average Rating"];
      const ratingFilterMap: { [key: string]: (rating: number) => boolean } = {
        ">=4": (rating: number) => rating >= 4,
        ">3": (rating: number) => rating > 3,
      };

      flag =
        flag &&
        averageRatingFilters.some((filter) =>
          ratingFilterMap[filter]?.(Number(entry.avgRating))
        );
    }
    console.log({ last: flag });
    return flag;
  });

  return filteredData;
}
