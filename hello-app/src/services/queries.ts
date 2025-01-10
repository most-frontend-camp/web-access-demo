import { useQuery } from "@tanstack/react-query";
import { fetchRandomQuote } from "./requests";

export const useRandomQuote = () => {
  return useQuery({
    queryKey: ["quote"],
    queryFn: fetchRandomQuote,
  });
};
