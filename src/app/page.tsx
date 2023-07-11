"use client";

import { ILog } from "@@types/ILog";
import { getLogs } from "@services/zenklogs";
import LogsScreen from "@ui/features/Logs";

import { useSearchParams } from "next/navigation";

import { useState, useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<ILog[]>([]);

  useEffect(() => {
    async function fetchLogs() {
      const source = searchParams.get("source");

      const logs = await getLogs(source);

      // console.log(logs);

      setData(logs);
    }
    fetchLogs();
  }, []);

  return <LogsScreen data={data} />;
}
