import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import "./bigChart.scss";

const data = [
  {
    name: "Sun",
    Books: 4000,
    Clothes: 2400,
    Electronics: 2400,
  },
  {
    name: "Mon",
    Books: 3000,
    Clothes: 1398,
    Electronics: 2210,
  },
  {
    name: "Tue",
    Books: 2000,
    Clothes: 9800,
    Electronics: 2290,
  },
  {
    name: "Wed",
    Books: 2780,
    Clothes: 3908,
    Electronics: 2000,
  },
  {
    name: "Thu",
    Books: 1890,
    Clothes: 4800,
    Electronics: 2181,
  },
  {
    name: "Fri",
    Books: 2390,
    Clothes: 3800,
    Electronics: 2500,
  },
  {
    name: "Sat",
    Books: 3490,
    Clothes: 4300,
    Electronics: 2100,
  },
];


function BigChartBox() {
  return (
    <div className="bigChart">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip contentStyle={{ background: "#2a3447", borderRadius: "5px" }} labelStyle={{ display: "none" }} />
            <Area type="monotone" dataKey="Electronics" stackId="1" stroke="#8884d8" fill="#8884d8" />
            <Area type="monotone" dataKey="Clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
            <Area type="monotone" dataKey="Books" stackId="1" stroke="#ffc658" fill="#ffc658" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BigChartBox