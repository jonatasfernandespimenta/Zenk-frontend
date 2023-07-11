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
      getKeysAndValuesFromJSON(data).map(({ key, value }) => (
        <p>
          {typeof value === "object" ? (
            <Collapsable.Root>
              <Collapsable.Header>
                <p className="text-primary">"data"</p>
                <p className="text-[#adadad90]">{JSON.stringify(value)}</p>
              </Collapsable.Header>

              <Collapsable.Content>
                <>
                  {getKeysAndValuesFromJSON(value).map(({ key, value }) => (
                    <p>
                      <span className="text-primary">"{key.toString()}": </span>"{value.toString()}"
                    </p>
                  ))}
                </>
              </Collapsable.Content>
            </Collapsable.Root>
          ) : (
            <>
              <span className="text-primary">"{key.toString()}": </span>"{value.toString()}"
            </>
          )}
        </p>
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
