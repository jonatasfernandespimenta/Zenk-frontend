interface ILogTitle {
  date: string;
  source: string;
}

export default function LogTitle({ date, source }: ILogTitle) {
  return (
    <p className="text-white">
      {date} <span className="font-bold text-primary">[{source}]</span>
    </p>
  );
}
