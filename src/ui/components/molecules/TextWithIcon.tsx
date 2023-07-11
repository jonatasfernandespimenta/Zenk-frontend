import { MdTerminal } from "react-icons/md";

interface ITextWithIcon {
  icon: JSX.Element;
  text: string;
  className?: string;
}

export default function TextWithIcon(props: ITextWithIcon) {
  return (
    <div className={`flex flex-row items-center justify-center ${props.className}`}>
      {props.icon}

      <p>{props.text}</p>
    </div>
  );
}
