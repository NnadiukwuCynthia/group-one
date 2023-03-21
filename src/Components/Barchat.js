import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

const Barchat = () => {
  const data = [
    { name: "02/01", earning: 190 },
    { name: "03/01", earning: 580 },
    { name: "04/01", earning: 410 },
    { name: "05/01", earning: 600 },
    { name: "06/01", earning: 320 },
    { name: "07/01", earning: 700 },
    { name: "08/01", earning: 510 },
  ];
  return (
    <>
      <div>
        <div className="chartHeading">
          <p className="chartText">Earnings</p>
          <select disabled>
            <option>Last 7 days</option>
          </select>
        </div>
        <div>
          <BarChart width={600} height={300} data={data} margin={{ top: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="earning" barSize={20} fill="#0065FF" />
          </BarChart>
        </div>
      </div>
    </>
  );
};

export default Barchat;
