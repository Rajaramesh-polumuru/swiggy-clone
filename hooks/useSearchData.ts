import { useState, useMemo, useEffect } from "react";
import { RestaurantData } from "@/app/types";

function useSearchData(
  data: RestaurantData[],
  debounceDelay: number = 300
): [RestaurantData[], (query: string) => void] {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  const filteredData = useMemo(() => {
    const query = debouncedQuery?.toLowerCase().trim();
    if (!query) {
      return data;
    }

    return data.filter((entry) => {
      return Object.values(entry).some((value) => {
        if (typeof value === "string" && value.toLowerCase().includes(query)) {
          return true;
        }
        if (
          Array.isArray(value) &&
          value.some((item) => item.toLowerCase().includes(query))
        ) {
          return true;
        }
        return false;
      });
    });
  }, [data, debouncedQuery]);

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, debounceDelay);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, debounceDelay]);

  return [filteredData, handleSearchQueryChange];
}

export default useSearchData;
