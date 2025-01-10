import { Input } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import { useState } from "react";

const students: string[] = [
  "Baruzhan",
  "Dias",
  "Dastan",
  "Nurlan",
  "Aigerim",
  "Nurik",
  "Nurali",
  "Nursultan",
];

export default function TeamPage() {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [search, setSearch] = useState<string>("");

  function handleInputChangeSearch(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value);
  }

  const filteredStudents = students.filter((student) =>
    student.toLowerCase().includes(search.toLowerCase())
  );

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  function handleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <>
      <h1>TeamPage</h1>
      <Input type="text" value={search} onChange={handleInputChangeSearch} />
      <ul>
        {filteredStudents.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>

      <Input type="text" value={text} onChange={handleInputChange} />
      <Paragraph>Input text: {text.length}</Paragraph>

      <div>
        <button onClick={handleVisibility}>Show/Hide Batman</button>
        {isVisible && <Paragraph>Batman is Bruce Wayne</Paragraph>}
      </div>
    </>
  );
}
