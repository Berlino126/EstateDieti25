import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchProperties = async ({ pageParam = 1 }) => {
  const res = await axios.get(`http://localhost:8800/api/property?page=${pageParam}&limit=10`);
  return res.data;
};

export const useInfiniteProperties = () => {
  return useInfiniteQuery({
    queryKey: ["properties"],
    queryFn: fetchProperties,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.nextPage ?? false; 
    },
  });
};
