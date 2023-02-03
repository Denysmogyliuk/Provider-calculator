import {
  BarChart,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  Cell,
} from "recharts";

export default function Graph({ data }) {
  return (
    <BarChart width={800} height={600} data={data}>
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
  );
}
