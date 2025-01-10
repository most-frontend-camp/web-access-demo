export const fetchRandomQuote = async () => {
  const response = await fetch("https://quotes-api-self.vercel.app/quote");

  if (!response.ok) {
    throw new Error("Faild to fetch");
  }

  return response.json();
};

export const fetchUsers = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  console.log(response);

  if (!response.ok) {
    throw new Error("Faild to fetch pokemons");
  }

  return response.json();
};

export const fetchPokemon = async (name: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  console.log(response);

  if (!response.ok) {
    throw new Error("Faild to fetch pokemons");
  }

  return response.json();
};
