import Checkbox from "antd/es/checkbox/Checkbox";
import Typography from "antd/es/typography/Typography";

export default function InfoMarriage() {
  return (
    <>
      <Typography>Семейное положение</Typography>
      <div className="flex flex-col">
        <Checkbox>Зарегистрированный брак</Checkbox>
        <Checkbox>Не состою в браке</Checkbox>
        <Checkbox>Незарегистрированный брак</Checkbox>
        <Checkbox>В разводе</Checkbox>
        <Checkbox>Вдова (ец)</Checkbox>
      </div>
    </>
  );
}
