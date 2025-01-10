export const fetchRandomQuote = async () => {
  const response = await fetch("https://quotes-api-self.vercel.app/quote");

  if (!response.ok) {
    throw new Error("Faild to fetch");
  }

  return response.json();
};
