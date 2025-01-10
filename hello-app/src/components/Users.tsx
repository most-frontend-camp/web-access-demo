import Title from "antd/es/typography/Title";
import { useFetchUsers } from "../services/queries";
import LoadingQuote from "./LoadingQuote";

export default function Users() {
  const { data, isLoading, isError } = useFetchUsers();

  if (isLoading) {
    return <LoadingQuote />;
  }

  if (isError) {
    return <span>Error message received</span>;
  }
  return (
    <div>
      <Title level={4}>User List</Title>
      <table>
        <thead>
          <tr>
            <th>URL</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {data.results.map(
            (pokemon: { name: string; url: string }, index: number) => (
              <tr key={index + 1}>
                <td>{pokemon.name}</td>
                <td>
                  <a
                    // href={pokemon.url}
                    href={`/form/${index}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Details
                  </a>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
