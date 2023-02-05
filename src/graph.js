import {
  BarChart,
  ResponsiveContainer,
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  Cell,
} from "recharts";
import { useState, useEffect, useCallback } from "react";
import throttle from "lodash.debounce";

export default function Graph({ data }) {
  const [isVertical, setIsVertical] = useState();
  const throttledSwitchWidth = useCallback(throttle(switchWidth, 300), []);

  function switchWidth() {
    setIsVertical(window.innerWidth < 880);
  }

  useEffect(() => {
    window.addEventListener("resize", throttledSwitchWidth);

    return () => window.removeEventListener("resize", throttledSwitchWidth);
  });

  return (
    <div className={"graph"}>
      {isVertical ? (
        <ResponsiveContainer width={540} height={400}>
          <BarChart width="100%" height="100%" data={data}>
            <YAxis
              tick={{ fontFamily: "sans-serif" }}
              type="number"
              domain={[0, 100]}
              hide
            />
            <Bar dataKey="cost" label={{ position: "top" }}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
              <LabelList dataKey="uv" position="top" fill="#000" />
            </Bar>{" "}
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <ResponsiveContainer width={540} height={500}>
          <ComposedChart
            layout="vertical"
            width={500}
            height={400}
            data={data}
            margin={{
              top: 45,
              right: 20,
              bottom: 45,
              left: 20,
            }}
          >
            <XAxis type="number" domain={[0, 100]} hide />
            <Bar dataKey="cost" barSize={80} label={{ position: "right" }}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Bar>
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
