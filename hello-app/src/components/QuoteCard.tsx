import Title from "antd/es/typography/Title";
import { useRandomQuote } from "../services/queries";
import Paragraph from "antd/es/typography/Paragraph";
import LoadingQuote from "./LoadingQuote";

export default function QuoteCard() {
  const { data, isLoading, isError } = useRandomQuote();

  if (isLoading) {
    return <LoadingQuote />;
  }

  if (isError) {
    return <span>Error message received</span>;
  }
  return (
    <div>
      <Title level={4}>{data.author}</Title>
      <Paragraph>{data.quote}</Paragraph>
    </div>
  );
}
