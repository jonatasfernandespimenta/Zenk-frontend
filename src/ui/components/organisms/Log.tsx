import { getKeysAndValuesFromJSON } from "@utils/getKeysAndValuesFromJSON";
import LogTitle from "../atoms/LogTitle";
import { Collapsable } from "../molecules/Collapsable";

import { useMemo } from "react";

interface ILog {
  date: string;
  source: string;
  data: Object;
}

export default function Log({ data, date, source }: ILog) {
  const mappedData = useMemo(
    () =>
      getKeysAndValuesFromJSON(data).map(({ key, value }, idx) => (
        <div key={idx}>
          {typeof value === "object" ? (
            <Collapsable.Root>
              <Collapsable.Header>
                <p className="text-primary">"data"</p>
                <p className="text-[#adadad90]">{JSON.stringify(value)}</p>
              </Collapsable.Header>

              <Collapsable.Content>
                <>
                  {getKeysAndValuesFromJSON(value).map(({ key, value }, idx) => (
                    <p key={idx * 10}>
                      <span className="text-primary">"{key.toString()}": </span>"{value.toString()}"
                    </p>
                  ))}
                </>
              </Collapsable.Content>
            </Collapsable.Root>
          ) : (
            <p>
              <span className="text-primary">"{key.toString()}": </span>"{value.toString()}"
            </p>
          )}
        </div>
      )),
    [data]
  );

  return (
    <Collapsable.Root>
      <Collapsable.Header>
        <LogTitle source={source} date={date.replace("T", " ").replace("Z", "")} />
      </Collapsable.Header>

      <Collapsable.Content>
        <div>{mappedData}</div>
      </Collapsable.Content>
    </Collapsable.Root>
  );
}
