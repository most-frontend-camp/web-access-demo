import { usePokemon } from "../services/queries";

export default function PokemonPage() {
  const name = "pikachi";
  const { data: pokemon, isLoading, isError } = usePokemon(name);

  if (isLoading) {
    return <span>Loading message received</span>;
  }

  if (isError) {
    return <span>Error message received</span>;
  }

  return (
    <div>
      <h1>Pokemon Page</h1>
      <h2>{pokemon.name}</h2>
    </div>
  );
}
