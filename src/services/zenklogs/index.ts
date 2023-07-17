import { ILog } from "@@types/ILog";
import axios from "axios";

const zenkApi = axios.create({
  baseURL: "http://localhost:3333",
});

interface IGetLogRequest {
  source?: string | null;
  page?: number | null;
}

export async function getLogs({ page, source }: IGetLogRequest): Promise<ILog[]> {
  let queryParams = "";

  if (source) {
    queryParams += `source=${source}`;
  }

  if (page) {
    queryParams += queryParams ? `&page=${page}` : `page=${page}`;
  }

  const response = await zenkApi.get(`/logs${queryParams ? `?${queryParams}` : ""}`);

  const logs = response.data.logs;

  const parsedLogs = logs.map((log: any) => {
    return {
      ...log,
      data: JSON.parse(log.data),
    };
  });

  return parsedLogs;
}
