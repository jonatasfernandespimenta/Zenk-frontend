import { ILog } from "@@types/ILog";
import axios from "axios";

const zenkApi = axios.create({
  baseURL: "http://localhost:3333",
});

export async function getLogs(): Promise<ILog[]> {
  const response = await zenkApi.get("/logs");

  const logs = response.data.logs;

  const parsedLogs = logs.map((log: any) => {
    return {
      ...log,
      data: JSON.parse(log.data),
    };
  });

  return parsedLogs;
}