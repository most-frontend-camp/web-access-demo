import { useQuery } from "@tanstack/react-query";
import { fetchPokemon, fetchRandomQuote, fetchUsers } from "./requests";

export const useRandomQuote = () => {
  return useQuery({
    queryKey: ["quote"],
    queryFn: fetchRandomQuote,
  });
};

export const useFetchUsers = () => {
  return useQuery({
    queryKey: ["pokemons"],
    queryFn: fetchUsers,
  });
};

export const usePokemon = (name: string) => {
  return useQuery({
    queryKey: ["pokemons", name],
    queryFn: () => fetchPokemon(name!),
    enabled: !!name,
  });
};
