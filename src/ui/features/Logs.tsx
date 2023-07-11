"use client";

import { ILog } from "@@types/ILog";
import Log from "@ui/components/organisms/Log";

interface ILogsScreen {
  data: ILog[];
}

export default function LogsScreen({ data }: ILogsScreen) {
  return (
    <div className="p-10">
      {data.map((log) => (
        <Log key={log.id} date={log.createdAt} source={log.source} data={log.data} />
      ))}
    </div>
  );
}
