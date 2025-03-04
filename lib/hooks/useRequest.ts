import { useQuery } from "@tanstack/react-query";
import { fetchMatches } from "../actions";
import { Match } from "../utils/types/match";
import { useState } from "react";
import useSubscription from "./useSubscription";

const useRequest = (url: string) => {
  const [matches, setMatches] = useState<string | null>(null);
  useSubscription();
  const {
    isPending,
    isError,
    isLoading,
    isFetching,
    isRefetching,
    data,
    refetch,
  } = useQuery({
    queryKey: ["matches"],
    queryFn: async () => fetchMatches(url),
    staleTime: 1000 * 60 * 5,
    retry: (failureCount: number) => {
      return failureCount <= 3;
    },
  });

  const filterData = data?.filter((item: Match) => {
    if (!matches) return true;
    return item.status === matches;
  }) as Match[];

  return {
    data,
    isLoading,
    isError,
    isPending,
    isFetching,
    isRefetching,
    matches: filterData,
    filter: setMatches,
    refetch,
  };
};

export default useRequest;
