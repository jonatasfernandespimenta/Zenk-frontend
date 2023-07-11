"use client";

import { ILog } from "@@types/ILog";
import { getLogs } from "@services/zenklogs";
import LogsScreen from "@ui/features/Logs";

import { useState, useEffect } from "react";

export default function Home() {
  const [data, setData] = useState<ILog[]>([]);

  useEffect(() => {
    async function fetchLogs() {
      const logs = await getLogs();

      // console.log(logs);

      setData(logs);
    }
    fetchLogs();
  }, []);

  return <LogsScreen data={data} />;
}
