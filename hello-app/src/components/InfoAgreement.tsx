import { Button, DatePicker, Input } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import Typography from "antd/es/typography/Typography";

export default function InfoAgreement() {
  return (
    <>
      <Title level={4}>Требования банковского законодательства</Title>

      <Typography>
        <Paragraph>
          In the process of internal desktop applications development, many
          different design specs and implementations would be involved, which
          might cause designers and developers difficulties and duplication and
          reduce the efficiency of development.
        </Paragraph>

        <Paragraph>
          After massive project practice and summaries, Ant Design, a design
          language for background applications, is refined by Ant UED Team,
          which aims to
        </Paragraph>
      </Typography>
      <div className="flex flex-row p-8 ml-8 g-2">
        <Input placeholder="ФИО" />
        <Button>Подписать</Button>
        <DatePicker needConfirm />
      </div>
    </>
  );
}
