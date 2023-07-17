"use client";

import { ILog } from "@@types/ILog";
import { getLogs } from "@services/zenklogs";
import LogsScreen from "@ui/features/Logs";
import useScrollListener from "@ui/hooks/useScrollListener";

import { useSearchParams } from "next/navigation";

import { useState, useEffect } from "react";

export default function Home() {
  const searchParams = useSearchParams();
  const [data, setData] = useState<ILog[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchLogs() {
      const source = searchParams.get("source");

      const logs = await getLogs({ source });

      setData(logs);
    }
    fetchLogs();
  }, [searchParams]);

  const handleScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
      setLoading(true);
      const logs = await getLogs({ page: currentPage + 1 });
      setCurrentPage(currentPage + 1);
      setData((crr) => [...crr, ...logs]);
      setLoading(false);
    }
  };

  useScrollListener(handleScroll);

  return (
    <div>
      <LogsScreen loading={loading} data={data} />
    </div>
  );
}
