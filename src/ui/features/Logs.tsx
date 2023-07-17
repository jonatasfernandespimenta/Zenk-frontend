"use client";

import { ILog } from "@@types/ILog";
import Spinner from "@ui/components/atoms/Spinner";
import Log from "@ui/components/organisms/Log";

interface ILogsScreen {
  data: ILog[];
  loading: boolean;
}

export default function LogsScreen({ data, loading }: ILogsScreen) {
  return (
    <div className="p-10">
      {data.map((log) => (
        <Log key={log.id} date={log.createdAt} source={log.source} data={log.data} />
      ))}

      {loading && <Spinner />}
    </div>
  );
}
