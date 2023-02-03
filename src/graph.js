import {
  BarChart,
  ResponsiveContainer,
  ComposedChart,
  Tooltip,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  Cell,
  CartesianGrid,
  Legend,
  Area,
  Line,
} from "recharts";
import { useState, useEffect } from "react";
import useResizeObserver from "@react-hook/resize-observer";

export default function Graph({ data }) {
  const [isVertical, setIsVertical] = useState();
  useEffect(() => {
    window.addEventListener("resize", getWidth);

    return window.removeEventListener("resize", getWidth);
  });

  function getWidth() {
    setIsVertical(window.innerWidth < 860);
  }

  return (
    <div className={"graph"}>
      {isVertical ? (
        <ResponsiveContainer width={540} height={400}>
          <BarChart width="100%" height="100%" data={data}>
            <YAxis
              tick={{ fontFamily: "sans-serif" }}
              type="number"
              domain={[0, 100]}
            />
            <Bar dataKey="cost" label={{ position: "top" }}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
              <LabelList dataKey="uv" position="top" fill="#000" />
            </Bar>{" "}
            <XAxis
              tick={{ fontFamily: "sans-serif" }}
              dataKey="name"
              allowDataOverflow="true"
            />
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
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            {/* <CartesianGrid stroke="#f5f5f5" /> */}
            <XAxis type="number" />
            {/* <YAxis dataKey="name" type="category" scale="band" /> */}
            {/* <Tooltip /> */}
            <Bar dataKey="cost" barSize={80} label={{ position: "top" }}>
              {data.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Bar>
            {/* <Line dataKey="cost" stroke="#ff7300" /> */}
          </ComposedChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

// export default function Graph({ data }) {
//   return (
//     <BarChart width={800} height={600} data={data}>
//       <YAxis
//         tick={{ fontFamily: "sans-serif" }}
//         type="number"
//         domain={[0, 100]}
//       />
//       <Bar dataKey="cost" label={{ position: "top" }}>
//         {data.map((entry) => (
//           <Cell key={entry.name} fill={entry.color} />
//         ))}
//         <LabelList dataKey="uv" position="top" fill="#000" />
//       </Bar>{" "}
//       <XAxis
//         tick={{ fontFamily: "sans-serif" }}
//         dataKey="name"
//         allowDataOverflow="true"
//       />
//     </BarChart>
//   );
// }
